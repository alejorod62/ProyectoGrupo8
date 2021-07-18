const cursosDisp = [
    {
        id: 1,
        nombre: "Curso introductorio al mundo de los criptoactivos",
        imgPath: "curso.jpg",
        descripcion: "Descubre el mundo de las criptomonedas y conviértete en un experto del tema. Conocé los motivos de su creación, y cómo se compran e intercambian las criptomonedas.",
        especific: ["Modalidad online", "4 encuentros de 2 hs", "Sin conocimientos previos", "6 cuotas sin interés de $748"],
        
        incluye: ["Fundamentos Bitcoin", "Tecnología Blockchain", 
        "Creación de Bloques y Cadena de Bloques", "Mineros y Usuarios", 
        "Cómo obtener bitcoins y crear una billetera","Transferir y recibir criptomoneda", 
        "Seguridad en el mundo Bitcoin","Minería y creación de Criptomoneda",
        "Cómo manejar diferentes tipos de Wallets existentes","Comercialización de criptomoneda",
        "Cómo minar por hardware o cloud minin","Tipos de criptomonedas en el mercado"]
    },
    {
        id: 2,
        nombre: "Inversión y trading de criptomonedas",
        imgPath: "curso2.jpg",
        descripcion: "Este curso tiene como finalidad familiarizar a los participantes al mundo de la 'Inversión con Criptomonedas', comenzando por la descripción y sus características, hasta lograr implementar herramientas para su operatoria y trading. Adicionalmente, también brindamos recomendaciones para realizar operaciones, normas de seguridad a tener en cuenta, y sitios fiables. Esta instancia de fromación constituye, sin duda, una base fundamental para quienes quieran comenzar con la operatoria de 'Criptomonedas', y lo hagan con seguridad, pasión y las herramientas necesarias.",
        especific: ["Modalidad online","8 encuentros de 2 hs","Realizar estrategias para optimizar sus resultados.", "Utilizar métodos de detección temprana.", "Comprender el momento del Mercado (Alertas y Señales).", "Lograr que los participantes se sientan confiados y seguros al realizar sus operaciones con Criptomonedas.", "6 cuotas sin interés de $1548"],
        
        incluye: ["Introducción a las Criptomonedas, nacimiento , evolución y criterio Filosofía del Bitcoiner, Sistema de Cobros y Pagos sin permiso, Ejecución Libre", 
        "Arquitectura y funcionamiento de las Criptos, Mecanismo y Desarrollo. El Cliente Bitcoin Core, su visión y esperanza. Mineros, Formadores y Armadores del Negocio Gastos y Comisiones de las transacciones Política Monetaria, Resguardos",
        "Los Monederos, su Función. Direcciones, Contacto. Diferentes Monederos. Monederos On-line. Monederos físicos (Hardware wallets).Explorador de Bloques. Los Paper Wallet (Generación de direcciones de papel). Recomendaciones. Reconstrucción de carteras (Semillas)",
        "Mineros y Usuarios",
        "Intercambio comercial extra-bursátil. Participantes. Bolsas de criptomonedas (Exchanges). Principales exchanges. Características y Funcionamiento. La Apertura de Cuenta, Requisitos Generales. ",
        "Medidas de Seguridad. Qué debemos Tener en Cuenta. Formas de Fondeo local e internacional. (Bancos y Pagadores). Coins y Dinero Fiduciario (fiat).",
        "Los distintos Tipos de Gráficos. Plataforma para analizar Gráficos.(Recomendados del Curso). Tipos de gráficos, Porción de Tiempo a Analizar. Jerarquía de Estudios a emplear.n",
        "Niveles Psicológicos, Alertas y Señales. Soportes y Resistencias. Líneas de Tendencia. Canal Tendencial. Distintos Patrones: De Confirmación. Patrones de Reversión. Patrones de Continuación."],
    },
    {
        id: 3,
        nombre: "Analista Técnico financiero y bursátil",
        imgPath: "curso3.jpg",
        descripcion: "Gracias a este curso de análisis técnico los participantes podrán comprender los mercados financieros, para que puedan hacer sus propios análisis de inversión y desarrollar sus estrategias o sistemas de trading Rentables. El programa tiene un enfoque práctico y de aplicación inmediata. Esta instancia formativa está pensada para ser cursada de forma independiente, pero su aprobación, más las de los siguientes tres cursos: Analista de Inversiones y Mercados financieros, con aplicación de simulador de operaciones bursátiles en tiempo real Ejecutivo en Finanzas y Mercado de Capitales Administrador de inversiones y Gestión de Patrimonios Financieros, con aplicación de simulador de operaciones bursátiles en tiempo real. Dará lugar a que los participantes obtengan el Certificado de Experto Universitario en Mercado de Capitales.",
        
        especific:["Modalidad online", "Objetivo general:  Formar a los participantes para analizar gráficos e histogramas y, a partir de allí, tomar decisiones, evaluar riesgos, asesorar a inversores y acompañar decisiones con un enfoque amplio.",
        ,"Objetivos específicos: Detecten con claridad y practicidad las oportunidades para armar o desarmar carteras.", "Apliquen los conocimientos al momento de administrar una cartera de inversión, y adquieran criterios para orientar a los inversores a complementar la inteligencia en la selección de activos.",
        "Conozcan y aprendan a interpretar los indicadores básicos, para luego desarrollar interpretaciones más avanzadas con otros indicadores mas complejos.",
        "12 encuentros de 3 hs", "Se requieren conocimientos previos", "12 cuotas sin interés de $2388"],
        
        incluye:["Conceptos básicos", "Definición y fundamentos del Análisis Técnico", "Análisis Técnico vs. Análisis Fundamental", 
        "Análisis Técnico Estadístico vs. Chartismo", "Un poco de historia sobre el Análisis Técnico", 
        "Series temporales de cotizaciones", "Software de Análisis Técnico", "Gráficos de barras", "Gráficos de línea", 
        "Gráficos de Candlestick", "Gráficos Intradiarios, diarios, semanales o mensuales", "Las medias moviles"]
    }
];

const cursosController = {
    index: (req, res) => {
        res.render('products/courses', {cursos: cursosDisp})
    }, 
    carrito: (req, res) => {
        res.render('products/cart', {cursos: cursosDisp})
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let cursoElegido

        for (let i = 0; i < cursosDisp.length; i++)
            if (id == cursosDisp[i].id) {
                cursoElegido = cursosDisp[i] 
            }
        res.render('products/details', {cursoDetalle: cursoElegido})
    },
    nuevo: (req, res) => {
        res.render('products/new')
    }
}

module.exports = cursosController;