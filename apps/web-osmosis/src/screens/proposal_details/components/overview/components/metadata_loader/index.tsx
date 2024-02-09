import React, { useEffect, useState } from 'react';
import Loading from '@/components/loading';

interface MetadataLoaderProps {
  metadata: string;
}

// Checks if a string is a valid URL
const isValidUrl = (url: string) => {
  const pattern = /^(ftp|http|https|ipfs):\/\/[^ "]+$/;
  return pattern.test(url);
};

// Checks if a string is a IPFS URL
const isIPFSUrl = (url: string) => {
  const pattern = /^(ipfs):\/\/[^ "]+$/;
  return pattern.test(url);
};

// Removes ipfs prefix from metadata
const removeIPFSPrefix = (metadata: string): string => {
  if (metadata.startsWith('ipfs://')) {
    return metadata.substring('ipfs://'.length);
  }
  return metadata;
};

const MetadataLoader: React.FC<MetadataLoaderProps> = ({ metadata }) => {
  const [metadataContent, setMetadataContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMetadata = async () => {
      try {
        if (!isValidUrl(metadata)) {
          setMetadataContent(metadata);
          return;
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // Abort the fetch after 10 seconds

        let response: Response;
        if (!isIPFSUrl(metadata)) {
          response = await fetch(metadata, { signal: controller.signal });
        } else {
          const modifiedMetadata = removeIPFSPrefix(metadata);
          response = await fetch(`https://ipfs.io/ipfs/${modifiedMetadata}`, {
            signal: controller.signal,
          });
        }
        clearTimeout(timeoutId); // Clear the timeout
        if (!isMounted) {
          setMetadataContent(metadata);
          return;
        }
        if (!response.ok) {
          setMetadataContent(metadata);
          return;
        }
        const text = await response.text();
        setMetadataContent(text);
      } catch (err) {
        if (!isMounted) return; // Exit if the component is unmounted
        setMetadataContent(metadata);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();

    return () => {
      isMounted = false; // Set isMounted to false when unmounting
    };
  }, [metadata]);

  if (loading) {
    return <Loading />;
  }

  if (metadataContent) {
    return <code>{metadataContent}</code>;
  }

  return null;
};

export default MetadataLoader;
