'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      try {
        const reportWebVitals = (metric: any) => {
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', metric.name, {
              value: Math.round(metric.value),
              event_category: 'Web Vitals',
              event_label: metric.id,
              non_interaction: true,
            });
          }
        };

        // Monitor Core Web Vitals
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(reportWebVitals);
          getFID(reportWebVitals);
          getFCP(reportWebVitals);
          getLCP(reportWebVitals);
          getTTFB(reportWebVitals);
        });
      } catch (error) {
        console.error('Error loading web vitals:', error);
      }
    }

    // Prefetch critical resources
    const prefetchLinks = [
      '/quick-quote',
      '/products',
      '/about',
    ];

    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Enable instant page preloading on hover
    let timer: NodeJS.Timeout;
    const prefetchOnHover = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        timer = setTimeout(() => {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = link.href;
          document.head.appendChild(prefetchLink);
        }, 100);
      }
    };

    const cancelPrefetch = () => {
      clearTimeout(timer);
    };

    document.addEventListener('mouseover', prefetchOnHover);
    document.addEventListener('mouseout', cancelPrefetch);

    return () => {
      document.removeEventListener('mouseover', prefetchOnHover);
      document.removeEventListener('mouseout', cancelPrefetch);
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}