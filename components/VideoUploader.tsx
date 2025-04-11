"use client";

import { useState, useRef, useEffect } from 'react';
import { Trash2, Upload, Shield, AlertTriangle, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from './VideoPlayer';

// List of allowed video mime types
const ALLOWED_VIDEO_TYPES = [
  'video/mp4',
  'video/webm',
  'video/ogg'
];

// Maximum file size (2GB)
const MAX_FILE_SIZE = 2 * 1024 * 1024 * 1024;

export default function VideoUploader() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const validateFile = (file: File): boolean => {
    setError(null);

    if (!ALLOWED_VIDEO_TYPES.includes(file.type)) {
      setError('Invalid file type. Only MP4, WebM, and OGG video files are allowed.');
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError('File is too large. Maximum size is 2GB.');
      return false;
    }

    return true;
  };

  const scanFile = async (file: File): Promise<boolean> => {
    setIsScanning(true);
    setError(null);

    try {
      const safeUrl = URL.createObjectURL(file);
      const video = document.createElement('video');
      
      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          URL.revokeObjectURL(safeUrl);
          setIsScanning(false);
          resolve(true);
        };

        video.onerror = () => {
          URL.revokeObjectURL(safeUrl);
          setError('Invalid or corrupted video file.');
          setIsScanning(false);
          resolve(false);
        };

        setTimeout(() => {
          URL.revokeObjectURL(safeUrl);
          setError('Video validation timed out.');
          setIsScanning(false);
          resolve(false);
        }, 5000);

        video.src = safeUrl;
      });
    } catch (err) {
      setError('Error scanning file.');
      setIsScanning(false);
      return false;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    
    if (file && file.type.startsWith('video/')) {
      if (validateFile(file)) {
        const isValid = await scanFile(file);
        if (isValid) {
          processVideoFile(file);
        }
      }
    } else {
      setError('Please upload a valid video file.');
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      if (validateFile(file)) {
        const isValid = await scanFile(file);
        if (isValid) {
          processVideoFile(file);
        }
      }
    } else {
      setError('Please upload a valid video file.');
    }
  };

  const processVideoFile = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        const url = URL.createObjectURL(file);
        setVideoUrl(url);
      }
    }, 100);
  };

  const handleDelete = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
      setUploadProgress(0);
      setError(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {error && (
        <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg flex items-center gap-2 animate-scale-in">
          <AlertTriangle className="h-5 w-5" />
          {error}
        </div>
      )}
      
      {!videoUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
            isDragging
              ? 'border-primary bg-primary/5 scale-102'
              : 'border-border hover:border-primary/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isScanning ? (
            <div className="animate-fade-in">
              <Shield className="mx-auto h-12 w-12 text-primary animate-pulse mb-4" />
              <h2 className="text-xl font-semibold mb-2">Scanning Video</h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Loader className="h-4 w-4 animate-spin" />
                <span>Checking file for security...</span>
              </div>
            </div>
          ) : (
            <div className="stagger-animation">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-xl font-semibold mb-2">Upload Video</h2>
              <p className="text-muted-foreground mb-4">
                Drag and drop your video here, or click to select
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/ogg"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                className="transition-transform duration-300 hover:scale-105"
              >
                Select Video
              </Button>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Maximum file size: 2GB</p>
                <p>Supported formats: MP4, WebM, OGG</p>
              </div>
            </div>
          )}
          
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-4 animate-fade-in">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Processing... {uploadProgress}%
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4 animate-scale-in">
          <VideoPlayer src={videoUrl} />
          <div className="flex justify-end">
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Trash2 className="h-4 w-4" />
              Delete Video
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}