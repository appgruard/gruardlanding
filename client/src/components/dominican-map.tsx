import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PROVINCES = [
  { name: 'Santo Domingo', lat: 18.4861, lng: -69.9312 },
  { name: 'Santiago', lat: 19.4517, lng: -70.6970 },
  { name: 'La Vega', lat: 19.2222, lng: -70.5289 },
  { name: 'Puerto Plata', lat: 19.7934, lng: -70.6884 },
  { name: 'La Romana', lat: 18.4273, lng: -68.9728 },
  { name: 'San Pedro de Macorís', lat: 18.4539, lng: -69.3081 },
  { name: 'San Cristóbal', lat: 18.4167, lng: -70.1000 },
  { name: 'Duarte (SFM)', lat: 19.3000, lng: -70.2500 },
  { name: 'Altagracia (Higüey)', lat: 18.6150, lng: -68.7071 },
  { name: 'Espaillat (Moca)', lat: 19.3935, lng: -70.5255 },
  { name: 'Azua', lat: 18.4532, lng: -70.7349 },
  { name: 'Barahona', lat: 18.2085, lng: -71.1007 },
  { name: 'Monte Cristi', lat: 19.8483, lng: -71.6459 },
  { name: 'Samaná', lat: 19.2056, lng: -69.3361 },
  { name: 'Peravia (Baní)', lat: 18.2796, lng: -70.3319 },
  { name: 'Monseñor Nouel (Bonao)', lat: 18.9363, lng: -70.4092 },
  { name: 'Valverde (Mao)', lat: 19.5519, lng: -71.0781 },
  { name: 'Sánchez Ramírez (Cotuí)', lat: 19.0527, lng: -70.1493 },
  { name: 'Monte Plata', lat: 18.8070, lng: -69.7839 },
  { name: 'Hato Mayor', lat: 18.7628, lng: -69.2568 },
  { name: 'El Seibo', lat: 18.7651, lng: -69.0389 },
  { name: 'San Juan', lat: 18.8113, lng: -71.2289 },
  { name: 'Hermanas Mirabal (Salcedo)', lat: 19.3775, lng: -70.4173 },
];

export function DominicanMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!mapContainer.current || initialized.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !initialized.current && mapContainer.current) {
          initialized.current = true;
          
          const initMap = () => {
            if (!mapContainer.current || map.current) return;

            try {
              const rect = mapContainer.current.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) {
                setTimeout(initMap, 100);
                return;
              }

              map.current = L.map(mapContainer.current, {
                attributionControl: false,
                scrollWheelZoom: false,
                touchZoom: 'center',
                zoomControl: false,
              }).setView([18.8, -70.3], 8);

              L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
                subdomains: 'abcd',
              }).addTo(map.current);

              PROVINCES.forEach((province) => {
                if (!map.current) return;
                
                // Using Navy Blue (#0F2947) and Orange (#F59E0B) from design guidelines
                const markerHtml = `
                  <div class="relative flex items-center justify-center">
                    <div class="absolute w-8 h-8 bg-orange/20 rounded-full animate-ping"></div>
                    <div class="relative w-4 h-4 bg-orange border-2 border-white rounded-full shadow-lg"></div>
                  </div>
                `;

                const customIcon = L.divIcon({
                  html: markerHtml,
                  className: 'custom-div-icon',
                  iconSize: [16, 16],
                  iconAnchor: [8, 8],
                });

                L.marker([province.lat, province.lng], {
                  icon: customIcon,
                }).bindPopup(`
                  <div class="p-1 font-sans">
                    <p class="font-bold text-primary">${province.name}</p>
                    <p class="text-xs text-muted-foreground">Servicio Disponible</p>
                  </div>
                `).addTo(map.current);
              });

              if (map.current) {
                map.current.invalidateSize();
              }
            } catch (err) {
              console.error('Map error:', err);
            }
          };

          initMap();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(mapContainer.current);

    return () => {
      observer.disconnect();
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      data-testid="dominican-map"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
