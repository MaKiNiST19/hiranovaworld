import React, { useState } from 'react'
import './GenelPlan.css'

interface Polygon {
  id: number
  points: string // 7 nokta koordinatı: "x1,y1 x2,y2 x3,y3 x4,y4 x5,y5 x6,y6 x7,y7"
  title: string
  order: {
    x: number // Yuvarlak numaranın x koordinatı (sol üst köşe)
    y: number // Yuvarlak numaranın y koordinatı (sol üst köşe)
  }
}

const GenelPlan: React.FC = () => {
  const [selectedPolygon, setSelectedPolygon] = useState<number | null>(null)

  // Polygon'un merkez noktasını hesapla
  const getPolygonCenter = (points: string): { x: number; y: number } => {
    const coords = points.split(' ').map(point => {
      const [x, y] = point.split(',').map(Number)
      return { x, y }
    })
    const centerX = coords.reduce((sum, p) => sum + p.x, 0) / coords.length
    const centerY = coords.reduce((sum, p) => sum + p.y, 0) / coords.length
    return { x: centerX, y: centerY }
  }

  // 18 adet çokgen alan - her biri 7 noktadan oluşan dörtgen
  // Her polygon için 7 nokta koordinatı girin (8. nokta otomatik olarak 1. noktaya bağlanır)
  // points formatı: "x1,y1 x2,y2 x3,y3 x4,y4 x5,y5 x6,y6 x7,y7"
  // order: Yuvarlak numaranın pozisyonu (polygon'un sol üst köşesi)
  // Örnek: { id: 1, points: "100,100 200,100 200,200 150,250 100,200 80,150 90,120", title: "Alan 1", order: { x: 90, y: 80 } }
  const polygons: Polygon[] = [
    { id: 1, points: "620,270 652,290 710,292 710,330 610,355 475,340 560,300 560,280", title: "Alan 1", order: { x: 610, y: 310 } },
    { id: 2, points: "785,285 812,305 885,312 885,345 810,367 648,350 720,335 720,290", title: "Alan 2", order: { x: 770, y: 320 } },
    { id: 3, points: "964,300 990,320 1085,330 1085,360 990,390 800,368 900,342 900,300", title: "Alan 3", order: { x: 950, y: 335 } },
    { id: 4, points: "1170,320 1205,340 1300,350 1300,385 1228,418 1000,392 1108,362 1108,330", title: "Alan 4", order: { x: 1160, y: 360 } },
    { id: 5, points: "1410,338 1440,363 1545,370 1545,415 1480,450 1230,418 1330,382 1330,350", title: "Alan 5", order: { x: 1400, y: 390 } },
    { id: 6, points: "1665,363 1705,387 1865,400 1855,490 1495,448 1563,405 1568,378 1625,378", title: "Alan 6", order: { x: 1660, y: 420 } },
    { id: 7, points: "495,360 548,370 548,410 440,445 275,420 390,375 390,357 470,345", title: "Alan 7", order: { x: 440, y: 390 } },
    { id: 8, points: "635,365 655,380 725,390 725,435 630,465 445,437 555,410 555,375", title: "Alan 8", order: { x: 620, y: 410 } },
    { id: 9, points: "815,386 845,405 935,418 935,460 835,495 635,465 740,435 742,400", title: "Alan 9", order: { x: 805, y: 435 } },
    { id: 10, points: "995,425 1028,412 1065,435 1170,450 1170,494 1075,538 838,498 955,455 955,420", title: "Alan 10", order: { x: 1030, y: 470 } },
    { id: 11, points: "1250,455 1280,443 1320,468 1440,486 1440,530 1350,580 1080,538 1190,486 1190,450", title: "Alan 11", order: { x: 1280, y: 510 } },
    { id: 12, points: "1575,478 1615,505 1768,526 1745,570 1715,645 1370,585 1450,525 1450,486 1540,495", title: "Alan 12", order: { x: 1590, y: 560 } },
    { id: 13, points: "305,450 385,464 385,480 350,485 350,510 220,550 85,515 185,475 185,428 280,435", title: "Alan 13", order: { x: 230, y: 490 } },
    { id: 14, points: "445,460 470,475 590,500 590,505 540,515 543,545 410,585 240,547 350,515 350,470", title: "Alan 14", order: { x: 420, y: 520 } },
    { id: 15, points: "635,495 665,515 790,535 790,550 775,555 777,580 630,640 415,590 544,547 544,508", title: "Alan 15", order: { x: 615, y: 560 } },
    { id: 16, points: "865,535 900,558 1025,575 1025,620 875,695 625,635 780,575 779,550", title: "Alan 16", order: { x: 855, y: 605 } },
    { id: 17, points: "1100,590 1137,580 1195,608 1330,630 1330,675 1200,770 890,698 1030,626 1030,578", title: "Alan 17", order: { x: 1125, y: 660 } },
    { id: 18, points: "1460,635 1510,665 1685,690 1610,860 1210,768 1325,680 1325,630 1445,645", title: "Alan 18", order: { x: 1475, y: 720 } },
  ]

  const handlePolygonClick = (id: number) => {
    setSelectedPolygon(id)
  }

  const handleCloseModal = () => {
    setSelectedPolygon(null)
  }

  return (
    <section id="genelplan" className="section genelplan-section">
      <div className="genelplan-background">
        <img src="/genelplan.jpg" alt="Genel Plan" className="genelplan-image" />
        <svg className="genelplan-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet">
          {polygons.map((polygon) => (
            polygon.points && (
              <g key={polygon.id} className="genelplan-polygon-group" data-polygon-id={polygon.id}>
                <polygon
                  points={polygon.points}
                  className="genelplan-polygon"
                  onClick={() => handlePolygonClick(polygon.id)}
                />
                <circle
                  cx={polygon.order.x}
                  cy={polygon.order.y}
                  r="22"
                  className="genelplan-order-pulse genelplan-order-pulse-1"
                >
                  <animate
                    attributeName="r"
                    values="22;38.5;55"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={polygon.order.x}
                  cy={polygon.order.y}
                  r="22"
                  className="genelplan-order-pulse genelplan-order-pulse-2"
                >
                  <animate
                    attributeName="r"
                    values="22;38.5;55"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.1;0"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={polygon.order.x}
                  cy={polygon.order.y}
                  r="22"
                  className="genelplan-order"
                  onClick={() => handlePolygonClick(polygon.id)}
                />
                <text
                  x={polygon.order.x}
                  y={polygon.order.y}
                  className="genelplan-order-text"
                  textAnchor="middle"
                  dominantBaseline="central"
                  onClick={() => handlePolygonClick(polygon.id)}
                >
                  {polygon.id}
                </text>
                {(() => {
                  const center = getPolygonCenter(polygon.points)
                  // Polygon'un en üst noktasını bul
                  const coords = polygon.points.split(' ').map(point => {
                    const [x, y] = point.split(',').map(Number)
                    return { x, y }
                  })
                  const minY = Math.min(...coords.map(p => p.y))
                  return (
                    <g 
                      className="genelplan-tooltip"
                      onClick={() => handlePolygonClick(polygon.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <rect
                        x={center.x - 100}
                        y={minY - 50}
                        width="200"
                        height="40"
                        rx="8"
                        className="genelplan-tooltip-bg"
                      />
                      <text
                        x={center.x}
                        y={minY - 30}
                        className="genelplan-tooltip-text"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        Villa Detayları için Tıklayın
                      </text>
                    </g>
                  )
                })()}
              </g>
            )
          ))}
        </svg>
      </div>

      {selectedPolygon && (
        <div className="genelplan-modal-overlay" onClick={handleCloseModal}>
          <div className="genelplan-modal" onClick={(e) => e.stopPropagation()}>
            <button className="genelplan-modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <div className="genelplan-modal-content">
              <h2>{polygons.find(p => p.id === selectedPolygon)?.title}</h2>
              <p>Bu alan hakkında detaylı bilgi buraya eklenecek.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GenelPlan

