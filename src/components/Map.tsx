import React, { useState, useRef, useEffect } from 'react'
import './Map.css'

interface RoutePoint {
  x: number // Yüzde olarak X pozisyonu (0-100)
  y: number // Yüzde olarak Y pozisyonu (0-100)
}

interface MapPin {
  id: string
  x: number // Yüzde olarak X pozisyonu (0-100)
  y: number // Yüzde olarak Y pozisyonu (0-100)
  title: string
  description: string
  distance: string
  address?: string
  icon?: React.ReactNode // Özel SVG ikon (opsiyonel)
  image?: string // Popup'ta gösterilecek görsel (opsiyonel)
  isMainPin?: boolean // Ana pin mi?
  routePoints?: RoutePoint[] // Ana pin'den bu pin'e özel rota noktaları (deniz-kara sınırı boyunca)
}

const Map: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null)
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [routePath, setRoutePath] = useState<string>('')
  const [routeAnimation, setRouteAnimation] = useState<number>(0)
  const [routeLength, setRouteLength] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Harita üzerindeki pin'ler
  const pins: MapPin[] = [
    {
      id: '1',
      x: 9,
      y: 0,
      title: 'Menteş Sahili',
      description: 'İzmir Güzelbahçe\'de konumlanmış ekolojik villa projesi. Doğanın kalbinde modern konfor.',
      distance: 'HiraNova dan Mesafe 27 km',
      address: 'HiraNova dan 27 km',
      image: '/mapimages/mentes.png',
      // HiraNova'dan Menteş'e deniz-kara sınırını takip eden rota (görseldeki rotaya göre)
      routePoints: [
        { x: 57, y: 74 },
        { x: 55, y: 68 },
        { x: 50, y: 43.4 },
        { x: 36, y: 53.4 },
        { x: 33.5, y: 64.4 },
        { x: 27.5, y: 66.4 },
        { x: 22.1, y: 58.8 },
        { x: 21, y: 61 },
        { x: 20.6, y: 60 },
        { x: 20.2, y: 57 }, 
        { x: 18, y: 56 }, 
        { x: 16.5, y: 52 },
        { x: 16, y: 46 },
        { x: 15.5, y: 42 },
        { x: 15.6, y: 38 },
        { x: 16, y: 36 },
        { x: 16, y: 32 },
        { x: 13, y: 25 },
        { x: 11, y: 18 },
        { x: 10, y: 10 }, 
        { x: 9, y: 5 }, 
      ]
    },
    {
      id: '2',
      x: 10.5,
      y: 13,
      title: 'Çeşme Altı Plajı',
      description: 'Ege Denizi\'ne yakın konum. Plajlara kısa mesafe.',
      distance: 'HiraNova dan 16 km',
      image: '/mapimages/cesmealti.png',
      routePoints: [
        { x: 57, y: 74 },
        { x: 55, y: 68 },
        { x: 50, y: 43.4 },
        { x: 36, y: 53.4 },
        { x: 33.5, y: 64.4 },
        { x: 27.5, y: 66.4 },
        { x: 22.1, y: 58.8 },
        { x: 21, y: 61 },
        { x: 20.6, y: 60 },
        { x: 20.2, y: 57 }, 
        { x: 18, y: 56 }, 
        { x: 16.5, y: 52 },
        { x: 16, y: 46 },
        { x: 15.5, y: 42 },
        { x: 15.6, y: 38 },
        { x: 16, y: 36 },
        { x: 16, y: 32 },
        { x: 13, y: 25 },
        { x: 11, y: 18 },
        { x: 10.5, y: 13 }, 
      ]
    },
    {
      id: '3',
      x: 24,
      y: 40,
      title: 'Karantina Adası',
      description: 'Çevredeki doğal parklar ve yürüyüş alanları.',
      distance: 'HiraNova dan 12 km',
      image: '/mapimages/karantina.png',
      routePoints: [
        { x: 57, y: 74 },
        { x: 55, y: 68 },
        { x: 50, y: 43.4 },
        { x: 36, y: 53.4 },
        { x: 33.5, y: 64.4 },
        { x: 27.5, y: 66.4 },
        { x: 22.1, y: 58.8 },
        { x: 24, y: 41 },
      ]
    },
    {
      id: '4',
      x: 13,
      y: 76,
      title: 'Urla Devlet Hastanesi',
      description: 'Yeni eklenen konum açıklaması.',
      distance: 'HiraNova dan 6 km',
      image: '/mapimages/hastane.png',
      routePoints: [
        { x: 57, y: 74 },
        { x: 55, y: 68 },
        { x: 50, y: 43.4 },
        { x: 36, y: 53.4 },
        { x: 33.5, y: 64.4 },
        { x: 27.5, y: 66.4 },
        { x: 22.1, y: 58.8 },
        { x: 13, y: 76 },
      ]
    },
    {
      id: '5',
      x: 67,
      y: 30,
      title: 'Liman Plajı',
      description: 'Yeni eklenen konum açıklaması.',
      distance: 'HiraNova dan 15 km',
      image: '/mapimages/limanplaj.png',
      routePoints: [
        { x: 57, y: 74 },
        { x: 55, y: 68 },
        { x: 50, y: 46 },
        { x: 54, y: 42 },
        { x: 58, y: 41 },
        { x: 67, y: 31 },       
      ]
    },
    {
      id: '6',
      x: 60,
      y: 74,
      title: 'HiraNova',
      description: 'Ana konum.',
      distance: 'Ana Konum',
      image: '/mapimages/cesmealti.png',
      isMainPin: true
    }
    
  ]

  // Ana pin'i bul
  const mainPin = pins.find(pin => pin.isMainPin) || pins.find(pin => pin.id === '6')

  const handlePinClick = (pin: MapPin) => {
    // Eğer aynı pin'e tekrar tıklandıysa kapat
    if (selectedPin?.id === pin.id) {
      handleClosePopup()
      return
    }
    
    setSelectedPin(pin)
    
    // Eğer tıklanan pin ana pin değilse, rota çiz
    if (mainPin && pin.id !== mainPin.id && wrapperRef.current) {
      const wrapper = wrapperRef.current
      const wrapperWidth = wrapper.offsetWidth
      const wrapperHeight = wrapper.offsetHeight
      
      let path = ''
      let approximateLength = 0
      
      // Eğer pin'de özel rota noktaları tanımlıysa, onları kullan
      if (pin.routePoints && pin.routePoints.length > 0) {
        // Ana pin'den başla
        const startX = (mainPin.x / 100) * wrapperWidth
        const startY = (mainPin.y / 100) * wrapperHeight
        
        // Rota noktalarını piksel cinsine çevir
        const routePixels = pin.routePoints.map(point => ({
          x: (point.x / 100) * wrapperWidth,
          y: (point.y / 100) * wrapperHeight
        }))
        
        // Son nokta hedef pin
        const endX = (pin.x / 100) * wrapperWidth
        const endY = (pin.y / 100) * wrapperHeight
        
        // Tüm noktaları birleştir (spline ile)
        const allPoints = [
          { x: startX, y: startY },
          ...routePixels,
          { x: endX, y: endY }
        ]
        
        // Catmull-Rom spline veya bezier curve ile path oluştur
        if (allPoints.length === 2) {
          // Sadece 2 nokta varsa düz çizgi
          path = `M ${allPoints[0].x} ${allPoints[0].y} L ${allPoints[1].x} ${allPoints[1].y}`
          approximateLength = Math.sqrt(
            Math.pow(allPoints[1].x - allPoints[0].x, 2) + 
            Math.pow(allPoints[1].y - allPoints[0].y, 2)
          )
        } else {
          // Birden fazla nokta varsa bezier curve ile birleştir
          let pathParts: string[] = []
          let totalLength = 0
          
          pathParts.push(`M ${allPoints[0].x} ${allPoints[0].y}`)
          
          for (let i = 0; i < allPoints.length - 1; i++) {
            const p0 = allPoints[Math.max(0, i - 1)]
            const p1 = allPoints[i]
            const p2 = allPoints[i + 1]
            const p3 = allPoints[Math.min(allPoints.length - 1, i + 2)]
            
            // Catmull-Rom spline kontrol noktaları
            const tension = 0.5
            const cp1x = p1.x + (p2.x - p0.x) / 6 * tension
            const cp1y = p1.y + (p2.y - p0.y) / 6 * tension
            const cp2x = p2.x - (p3.x - p1.x) / 6 * tension
            const cp2y = p2.y - (p3.y - p1.y) / 6 * tension
            
            pathParts.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`)
            
            // Segment uzunluğunu hesapla
            const segLength = Math.sqrt(
              Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
            )
            totalLength += segLength
          }
          
          path = pathParts.join(' ')
          approximateLength = totalLength
        }
      } else {
        // Otomatik hesaplama (mevcut kod)
        const startX = (mainPin.x / 100) * wrapperWidth
        const startY = (mainPin.y / 100) * wrapperHeight
        const endX = (pin.x / 100) * wrapperWidth
        const endY = (pin.y / 100) * wrapperHeight
        
        const dx = endX - startX
        const dy = endY - startY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        const curveIntensity = distance * 0.3
        const control1X = startX + dx * 0.3
        const control1Y = startY + dy * 0.3 - curveIntensity * 0.5
        const control2X = startX + dx * 0.7
        const control2Y = startY + dy * 0.7 - curveIntensity * 0.5
        
        path = `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${endX} ${endY}`
        
        const length1 = Math.sqrt(Math.pow(control1X - startX, 2) + Math.pow(control1Y - startY, 2))
        const length2 = Math.sqrt(Math.pow(control2X - control1X, 2) + Math.pow(control2Y - control1Y, 2))
        const length3 = Math.sqrt(Math.pow(endX - control2X, 2) + Math.pow(endY - control2Y, 2))
        approximateLength = length1 + length2 + length3
      }
      
      setRouteLength(approximateLength)
      setRoutePath(path)
      setRouteAnimation(0)
      
      // Animasyonu başlat - kısa bir gecikme ile transition'ın düzgün çalışması için
      setTimeout(() => {
        requestAnimationFrame(() => {
          setRouteAnimation(100)
        })
      }, 50)
    } else {
      // Ana pin'e tıklandıysa veya rota yoksa rota'yı temizle
      setRoutePath('')
      setRouteAnimation(0)
      setRouteLength(0)
    }
  }

  const handleClosePopup = () => {
    setSelectedPin(null)
    setRoutePath('')
    setRouteAnimation(0)
    setRouteLength(0)
  }

  // Görsel yüklendiğinde section yüksekliğini ayarla ve popup max-height'ını güncelle
  useEffect(() => {
    const updateSectionHeight = () => {
      if (imageRef.current && sectionRef.current) {
        // Görselin doğal yüksekliğini veya render edilmiş yüksekliğini al
        const imageHeight = imageRef.current.naturalHeight > 0 
          ? (imageRef.current.offsetWidth / imageRef.current.naturalWidth) * imageRef.current.naturalHeight
          : imageRef.current.offsetHeight
        
        // Biraz padding ekleyerek kesilmesini önle
        sectionRef.current.style.height = `${imageHeight}px`
        sectionRef.current.style.minHeight = `${imageHeight}px`
        setImageHeight(imageHeight)
      }
    }

    const image = imageRef.current
    if (image) {
      if (image.complete && image.naturalHeight > 0) {
        updateSectionHeight()
      } else {
        image.addEventListener('load', updateSectionHeight)
        image.addEventListener('error', updateSectionHeight)
        window.addEventListener('resize', updateSectionHeight)
      }
    }

    // İlk render'dan sonra da kontrol et
    const timeoutId = setTimeout(updateSectionHeight, 100)

    return () => {
      if (image) {
        image.removeEventListener('load', updateSectionHeight)
        image.removeEventListener('error', updateSectionHeight)
      }
      window.removeEventListener('resize', updateSectionHeight)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section id="map" ref={sectionRef} className="section map-section">
      <div className="map-container">
        <div ref={wrapperRef} className="map-image-wrapper">
          <img ref={imageRef} src="/harita.jpg" alt="Harita" className="map-image" />
          
          {/* Rota çizgisi */}
          {routePath && routeLength > 0 && (
            <svg 
              className="map-route"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5
              }}
            >
              <defs>
                <marker
                  id="route-arrow"
                  markerWidth="12"
                  markerHeight="12"
                  refX="10"
                  refY="6"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M2 2 L10 6 L2 10 Z" fill="#8d8e80" />
                </marker>
                <mask id="route-draw-mask">
                  <path
                    d={routePath}
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeDasharray={routeLength}
                    strokeDashoffset={routeLength - (routeAnimation / 100) * routeLength}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: routeAnimation > 0 ? 'stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                    }}
                  />
                </mask>
              </defs>
              <path
                d={routePath}
                fill="none"
                stroke="#8d8e80"
                strokeWidth="4"
                strokeDasharray="14 10"
                strokeDashoffset="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#route-arrow)"
                mask="url(#route-draw-mask)"
                style={{
                  transition: routeAnimation > 0 ? 'stroke-dashoffset 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                }}
              />
              <path
                d={routePath}
                fill="none"
                stroke="transparent"
                strokeWidth="1"
                markerEnd="url(#route-arrow)"
              />
            </svg>
          )}
          
          {/* Pin'ler */}
          {pins.map((pin) => (
            <button
              key={pin.id}
              className={`map-pin ${selectedPin?.id === pin.id ? 'active' : ''} ${pin.isMainPin ? 'main-pin' : ''}`}
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handlePinClick(pin)}
              aria-label={pin.title}
            >
              {pin.icon || (
                <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none">
                    <path
                      fill="currentColor"
                      fillOpacity=".16"
                      fillRule="evenodd"
                      d="M7.077 4.065a6.905 6.905 0 0 1 9.85 0c2.758 2.773 2.758 7.21.038 9.945L12.002 19L7.04 14.01a7.034 7.034 0 0 1 0-9.907zM12 6.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                      clipRule="evenodd"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M17.455 16.986c2.736.487 4.545 1.33 4.545 2.287C22 20.779 17.523 22 12 22S2 20.78 2 19.273c0-.958 1.81-1.8 4.545-2.287m10.383-12.92c2.757 2.772 2.757 7.208.037 9.944L12.002 19L7.04 14.01a7.034 7.034 0 0 1 0-9.908l.037-.036a6.906 6.906 0 0 1 9.85 0m0 0q-.055-.055 0 0M14 8.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                    />
                  </g>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dikey Expandable Gallery - Sağ alt köşe */}
      <div className="map-expandable-gallery">
        {pins.filter(pin => !pin.isMainPin).map((pin) => (
          <div
            key={pin.id}
            className={`map-gallery-item ${selectedPin?.id === pin.id ? 'expanded' : ''}`}
            style={{
              backgroundImage: pin.image ? `url(${pin.image})` : 'none'
            }}
          >
            {/* Beyaz overlay */}
            <div className="map-gallery-item-overlay"></div>
            
            {/* Header - her zaman görünür */}
            <div className="map-gallery-item-header" onClick={() => handlePinClick(pin)}>
              <h4 className="map-gallery-item-title">{pin.title}</h4>
            </div>
            
            {/* Expanded content - popup içeriği */}
            {selectedPin?.id === pin.id && (
              <div className="map-gallery-item-content">
                <button 
                  className="map-gallery-item-close" 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClosePopup()
                  }} 
                  aria-label="Kapat"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
                {selectedPin.image && (
                  <div className="map-gallery-item-content-image">
                    <img src={selectedPin.image} alt={selectedPin.title} />
                  </div>
                )}
                <h3 className="map-gallery-item-content-title">{selectedPin.title}</h3>
                {selectedPin.address && (
                  <p className="map-gallery-item-content-address">{selectedPin.address}</p>
                )}
                <p className="map-gallery-item-content-description">{selectedPin.description}</p>
                <div className="map-gallery-item-content-distance">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{selectedPin.distance}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Map

