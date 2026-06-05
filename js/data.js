/* ============================================================
   ADRIAN VARALES PROPIEDADES — Catálogo (Tandil, Bs. As.)
   Fuente: Excel "PROPIEDADES_STOCK_AV_PROP" + chat WhatsApp.
   "cover" = índice de la foto de portada (fachada para casas/deptos).
   ============================================================ */

const SITE = {
  agent: "Adrián Varales",
  brand: "Adrián Varales Propiedades",
  city: "Tandil",
  province: "Buenos Aires, Argentina",
  whatsapp: "5492494654199",
  whatsappPretty: "+54 9 2494 65-4199",
  instagram: "https://instagram.com/adrianvarales.propiedades",
  instagramHandle: "@adrianvarales.propiedades",
  email: "info@adrianvarales.com.ar",
  tagline: "Propiedades en Tandil, con criterio y cercanía.",
};

const PROPERTIES = [
  {
    id: "peyrel-2100", title: "Casa premium con pileta", address: "Peyrel 2100", zone: "Zona residencial · Tandil",
    type: "Casa", operation: "Venta", price: 250000, status: "Disponible", featured: true, badge: "Premium",
    beds: 2, baths: 2, parking: 2, area: "Lote 15 × 30 m", images: 13, cover: 2,
    short: "Impecable, con suite, vestidor, pileta y parrilla. Losa radiante y grandes ventanales.",
    description: "Casa de 2 habitaciones impecable, una en suite con vestidor. Living comedor amplio y cocina con barra desayunadora. Hermoso patio con piscina y parrilla, pasada vehicular para 2 vehículos. Calefacción por losa radiante, grandes ventanales con cortinas y alarma.",
    features: ["2 habitaciones (1 en suite con vestidor)", "2 baños completos", "Living comedor amplio", "Cocina con barra desayunadora", "Patio con piscina y parrilla", "Losa radiante", "Grandes ventanales · alarma", "Pasada para 2 autos", "Lote 15 × 30 m"],
  },
  {
    id: "juncal-sandino", title: "Chalet en zona residencial", address: "Juncal y Sandino", zone: "Excelente zona residencial · Tandil",
    type: "Casa", operation: "Venta", price: 300000, status: "Disponible", featured: true, badge: "Premium",
    beds: 3, baths: 2, parking: 2, area: null, images: 14, cover: 2,
    short: "Amplio chalet en excelente estado, ideal para familia consolidada. Garage doble con parrilla.",
    description: "Hermoso chalet en excelente estado de mantenimiento, ideal para quienes buscan comodidad, amplitud y una ubicación residencial. Cuenta con 3 dormitorios, 2 baños, living, escritorio, cocina comedor y lavadero. Garage doble con parrilla y baño, y patio verde.",
    features: ["3 dormitorios", "2 baños", "Living + escritorio", "Cocina comedor", "Lavadero", "Garage doble con parrilla y baño", "Patio verde"],
  },
  {
    id: "pio-xii-1900", title: "Casa lista para entrar", address: "Pío XII al 1900", zone: "Zona residencial · Tandil",
    type: "Casa", operation: "Venta", price: 110000, status: "Disponible", featured: true, badge: null,
    beds: 2, baths: 1, parking: 1, area: "Lote 266 m² · 83 m² cub.", images: 12, cover: 1,
    short: "Terminaciones modernas: DVH, porcelanato y grifería monocomando. Patio verde y entrada vehicular.",
    description: "Casa lista para entrar a vivir, con muy buenas terminaciones: DVH, porcelanato, grifería monocomando y luminaria completa. 2 dormitorios con placard, patio verde y entrada vehicular. Sobre lote de 266,25 m² con 83 m² cubiertos aprox.",
    features: ["2 dormitorios con placard", "Patio verde", "Entrada vehicular", "DVH", "Porcelanato", "Grifería monocomando", "Lote 266,25 m² · 83 m² cubiertos"],
  },
  {
    id: "pellegrini-50", title: "Dúplex con quincho y terraza", address: "Pellegrini 50", zone: "A 50 m del Supermercado Monarca · Tandil",
    type: "Departamento", operation: "Venta", price: 85000, status: "Disponible", featured: true, badge: "Muy buena ubicación",
    beds: 2, baths: 2, parking: 1, area: null, images: 14, cover: 5,
    short: "Departamento dúplex con comodidades de casa: quincho, terraza propia y espacio vehicular.",
    description: "Departamento dúplex que combina la practicidad de un departamento con las comodidades de una casa. 2 habitaciones, cocina separada por barra, toilette y baño completo, quincho, espacio vehicular y terraza propia. Excelente ubicación, a 50 m del Supermercado Monarca.",
    features: ["2 habitaciones", "Cocina separada por barra", "Toilette + baño completo", "Quincho", "Terraza propia", "Espacio vehicular"],
  },
  {
    id: "zona-procrear", title: "Departamento moderno con patio", address: "Zona Procrear", zone: "Tandil",
    type: "Departamento", operation: "Venta", price: 82000, status: "Disponible", featured: true, badge: "Moderno",
    beds: 2, baths: 1, parking: 1, area: null, images: 10, cover: 8,
    short: "Unidad tipo casa, moderna y funcional, con patio propio, entrada de auto y parrilla.",
    description: "Una opción ideal para vivir cómodo y moderno, con espacios que hoy todos buscan. 2 habitaciones, estar comedor, cocina, losa radiante, patio propio, entrada de auto y parrilla.",
    features: ["2 habitaciones", "Estar comedor", "Cocina", "Losa radiante", "Patio propio", "Entrada de auto", "Parrilla"],
  },
  {
    id: "cerro-redondo-200", title: "Casa con potencial", address: "Cerro Redondo al 200", zone: "Zona residencial tranquila · Tandil",
    type: "Casa", operation: "Venta", price: 87000, status: "Disponible", featured: true, badge: null,
    beds: 2, baths: 1, parking: 1, area: "Lote 10 × 30 m", images: 14, cover: 1,
    short: "Casa con espacios amplios, loft/oficina y lote con potencial de desarrollo.",
    description: "Casa con espacios amplios y funcionales, ideal para quienes buscan comodidad y potencial. Living comedor luminoso, cocina integrada, 2 habitaciones y un loft/oficina con espacio extra para proyectar. Sobre lote de 10 × 30 m.",
    features: ["2 habitaciones", "Loft / oficina", "Living comedor luminoso", "Cocina integrada", "Baño", "Lote 10 × 30 m"],
  },
  {
    id: "navarro-200", title: "Casa a estrenar, apta crédito", address: "Navarro al 200", zone: "Zona Tropezón · a metros de Av. Lunghi",
    type: "Casa", operation: "Venta", price: 67500, status: "Disponible", featured: false, badge: "Apta crédito",
    beds: 2, baths: 1, parking: 2, area: null, images: 9, cover: 1, aptoCredito: true,
    short: "PH contrafrente a estrenar, funcional y luminoso. Patio y entrada para 2 autos.",
    description: "Una excelente opción para quienes buscan una propiedad funcional, luminosa y apta crédito. PH contrafrente a estrenar, con 2 habitaciones, cocina integrada al living comedor, baño completo, patio y entrada para 2 autos.",
    features: ["A estrenar", "PH contrafrente", "2 habitaciones", "Cocina integrada al living", "Baño completo", "Patio", "Entrada para 2 autos", "Apta crédito"],
  },
  {
    id: "machado-93", title: "Departamento en planta baja", address: "Machado 93", zone: "Zona práctica · Tandil",
    type: "Departamento", operation: "Venta", price: 63000, status: "Disponible", featured: false, badge: null,
    beds: 1, baths: 1, parking: 1, area: null, images: 14, cover: 1,
    short: "PB con patio privado y estacionamiento. Funcional, ideal persona sola, pareja o inversión.",
    description: "Departamento en planta baja con todo lo necesario: 1 dormitorio, patio privado, estacionamiento, cocina separada, living comedor — sala de estar y baño completo. Un buen producto funcional en una zona práctica de la ciudad.",
    features: ["1 dormitorio", "Patio privado", "Estacionamiento", "Cocina separada", "Living comedor", "Baño completo"],
  },
  {
    id: "montiel-500", title: "Departamento con renta", address: "Montiel al 500", zone: "1° piso · Tandil",
    type: "Departamento", operation: "Venta", price: 65000, status: "Disponible", featured: false, badge: "Ideal inversores",
    beds: 1, baths: 1, parking: 1, area: null, images: 7, cover: 1, priceNote: "Libre de gastos de escritura",
    short: "Alquilado hasta agosto 2026: renta activa desde el primer día. Cochera asignada.",
    description: "Departamento cómodo y funcional en 1° piso. Ideal para inversores: actualmente alquilado hasta agosto 2026, generando renta desde el primer día. Living comedor luminoso, cocina independiente, 1 habitación, baño completo y cochera asignada.",
    features: ["1 habitación", "Living comedor luminoso", "Cocina independiente", "1 baño completo", "Cochera asignada", "Alquilado hasta agosto 2026", "Libre de gastos de escritura"],
  },
  {
    id: "independencia-2200", title: "Local + 2 deptos a terminar", address: "Independencia al 2200", zone: "Zona en desarrollo · Tandil",
    type: "Local", operation: "Venta", price: 54000, status: "Disponible", featured: false, badge: "Inversión",
    beds: null, baths: null, parking: 1, area: "Local 60 m² + 2 deptos 35 m²", images: 7, cover: 1,
    short: "Oportunidad para terminar a tu gusto y generar renta. Local a la calle + 2 departamentos.",
    description: "Oportunidad para quien busca invertir, terminar a su gusto y generar renta. Local a la calle a terminar de 60 m² (con plano) + 2 departamentos a terminar de 35 m² cada uno. Todos los servicios y acepta vehículo. Comprá, terminá y generá renta.",
    features: ["Local a la calle 60 m² (con plano)", "2 departamentos de 35 m² c/u", "A terminar", "Todos los servicios", "Acepta vehículo"],
  },
  {
    id: "piccirilli-100", title: "Local comercial", address: "Piccirilli al 100", zone: "Zona de fácil acceso · Tandil",
    type: "Local", operation: "Venta", price: null, status: "Disponible", featured: false, badge: "Consultar",
    beds: null, baths: null, parking: null, area: "8 × 6 m", images: 3, cover: 1,
    short: "Local de 8 × 6 m con salón, baño y cocina. Listo para iniciar o potenciar tu emprendimiento.",
    description: "Local comercial de 8 × 6 metros, ideal para distintos rubros: amplio salón, baño y cocina, en muy buen estado general. Listo para iniciar o potenciar tu emprendimiento en una zona de fácil acceso. Consultá valor actualizado.",
    features: ["Amplio salón", "Baño", "Cocina", "Muy buen estado", "8 × 6 m"],
  },
  {
    id: "ituzaingo-600", title: "Casa cerca del Monte Calvario", address: "Ituzaingó al 600", zone: "A 2 cuadras del Monte Calvario · Tandil",
    type: "Casa", operation: "Venta", price: 50000, status: "Vendida", featured: false, badge: null,
    beds: 2, baths: 1, parking: 1, area: "Lote 16 × 10 m", images: 9, cover: 1,
    short: "A dos cuadras del Monte Calvario, en zona tranquila con todos los servicios.",
    description: "Casa a solo dos cuadras del emblemático Monte Calvario, en zona tranquila y con todos los servicios. 2 habitaciones, baño, estar, cocina comedor y patio. Sobre lote de 16 × 10 m.",
    features: ["2 habitaciones", "1 baño", "Estar", "Cocina comedor", "Patio", "Lote 16 × 10 m", "Todos los servicios"],
  },
  {
    id: "campo-azul", title: "Campo mixto en Azul", address: "Campo en Azul", zone: "Azul, a 2.000 m de Ruta 3",
    type: "Campo", operation: "Venta", price: null, priceText: "USD 4.500 / ha", status: "Disponible", featured: false, badge: "Rural",
    beds: null, baths: null, parking: null, area: "90 ha + 9 ha de chacra", images: 11, cover: 1,
    short: "90 ha mixtas + 9 ha de chacra, con excelente acceso y arrendamiento vigente.",
    description: "Campo mixto en Azul, Bs. As., a solo 2.000 metros de Ruta 3, ideal para producción mixta. 90 hectáreas mixtas + 9 hectáreas de chacra (separadas por calle), sembrado con soja y con arrendamiento vigente.",
    features: ["90 ha mixtas", "+ 9 ha de chacra", "Excelente acceso (Ruta 3)", "Sembrado con soja", "Arrendamiento vigente"],
  },
  {
    id: "miramar-peatonal", title: "Departamento en Miramar", address: "Miramar — sobre peatonal", zone: "A 3 cuadras del mar",
    type: "Departamento", operation: "Venta", price: 65000, status: "Disponible", featured: false, badge: "Costa",
    beds: 2, baths: 1, parking: null, area: null, images: 1, cover: 1, photosPending: true,
    short: "Sobre la peatonal de Miramar, a 3 cuadras del mar. Ideal inversión o uso vacacional.",
    description: "Departamento en Miramar, sobre la peatonal y a solo 3 cuadras del mar. 2 habitaciones, living comedor, cocina comedor, balcón, baño y lavadero. Edificio con ascensor. Ideal para inversión o uso vacacional. (Fotos a solicitar.)",
    features: ["2 habitaciones", "Living comedor", "Cocina comedor", "Balcón", "Baño + lavadero", "Edificio con ascensor"],
  },
  {
    id: "independencia-urquiza", title: "Lote en esquina", address: "Independencia y Urquiza", zone: "Esquina estratégica · Tandil",
    type: "Lote", operation: "Venta", price: 50000, status: "Disponible", featured: false, badge: "Inversión",
    beds: null, baths: null, parking: null, area: "1.296 m²", images: 14, cover: 1, priceNote: "Libre de gastos",
    short: "1.296 m² en esquina con gran frente y ochava. Ideal desarrollo, negocio o galpón.",
    description: "Gran oportunidad para inversión, desarrollo o proyecto en una esquina estratégica de la ciudad. Superficie total de 1.296 m², con gran frente, ochava y lote irregular. Ideal para constructor, desarrollador, negocio, galpón o emprendimiento.",
    features: ["1.296 m²", "Esquina con ochava", "Gran frente", "Ideal desarrollo / galpón", "Libre de gastos"],
  },
  {
    id: "quintana-bs-as", title: "Lote con planos preaprobados", address: "Quintana y Buenos Aires", zone: "Zona con servicios · Tandil",
    type: "Lote", operation: "Venta", price: 33000, status: "Disponible", featured: false, badge: null,
    beds: null, baths: null, parking: null, area: "10 × 29,9 m", images: 8, cover: 1,
    short: "Listo para proyectar: todos los servicios y planos preaprobados de 40 m².",
    description: "Lote de 10 × 29,9 m con todos los servicios: luz, agua, gas y calle asfaltada. Cuenta con planos preaprobados de 40 m². Ideal para construir tu hogar o invertir. Escucha ofertas.",
    features: ["10 × 29,9 m", "Luz · agua · gas", "Calle asfaltada", "Planos preaprobados de 40 m²"],
  },
  {
    id: "suarez-garcia-2300", title: "Lote amplio con servicios", address: "Suárez García al 2300", zone: "Barrio Docente · Tandil",
    type: "Lote", operation: "Venta", price: 22000, status: "Disponible", featured: false, badge: "Oportunidad",
    beds: null, baths: null, parking: null, area: "16 × 30 m", images: 10, cover: 1,
    short: "Lote amplio con todos los servicios en una zona tranquila y en crecimiento.",
    description: "Excelente oportunidad para construir o invertir en una zona tranquila y en crecimiento. Lote amplio de 16 × 30 m, con todos los servicios. Ideal primera vivienda o inversión de tierra.",
    features: ["16 × 30 m", "Todos los servicios", "Zona en crecimiento", "Ideal construir o invertir"],
  },
  {
    id: "piedrabuena-2400", title: "Lote en Villa Italia", address: "Piedrabuena al 2400", zone: "Villa Italia · Tandil",
    type: "Lote", operation: "Venta", price: 25000, status: "Disponible", featured: false, badge: null,
    beds: null, baths: null, parking: null, area: "249,5 m² · 10 × 24,95 m", images: 3, cover: 1, priceNote: "Libre de gastos",
    short: "249,5 m² en uno de los sectores de mayor desarrollo residencial de la ciudad.",
    description: "Excelente oportunidad para construir o invertir en Villa Italia, uno de los sectores con mayor desarrollo residencial de Tandil. Lote regular de 249,5 m² (10 m de frente × 24,95 m de fondo), fácil de aprovechar. Libre de gastos.",
    features: ["249,5 m²", "10 × 24,95 m", "Villa Italia", "Terreno regular", "Libre de gastos"],
  },
  {
    id: "blandengues-533", title: "Dos lotes juntos", address: "Pasaje Blandengues 533", zone: "Villa Cordobita · Tandil",
    type: "Lote", operation: "Venta", price: 60000, status: "Disponible", featured: false, badge: "2 parcelas",
    beds: null, baths: null, parking: null, area: "2 parcelas (≈38,65 m fondo)", images: 1, cover: 1, photosPending: true,
    short: "Dos parcelas juntas, ideal para constructor o inversor que busca proyectar.",
    description: "Dos lotes juntos para proyectar. Parcela 9: 9,22 × 38,65 m. Parcela 8: 7,42 × 38,65 m. Ideal para constructor o inversor que busca dos lotes contiguos. (Fotos a solicitar.)",
    features: ["Parcela 9: 9,22 × 38,65 m", "Parcela 8: 7,42 × 38,65 m", "Dos lotes juntos", "Ideal proyecto / inversión"],
  },
];

/* Helpers compartidos -------------------------------------------------- */
function propImage(id, n) { return `assets/properties/${id}/${String(n).padStart(2, "0")}.jpg`; }
function coverImage(p) { return propImage(p.id, p.cover || 1); }
function priceLabel(p) {
  if (p.priceText) return p.priceText;
  if (p.price == null) return "Consultar valor";
  return "USD " + p.price.toLocaleString("es-AR");
}
function waLink(text) {
  const t = encodeURIComponent(text || "Hola Adrián, quiero hacer una consulta sobre una propiedad.");
  return `https://wa.me/${SITE.whatsapp}?text=${t}`;
}
function getProperty(id) { return PROPERTIES.find((p) => p.id === id); }
