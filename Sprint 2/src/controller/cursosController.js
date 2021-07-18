const cursosDisp = [
    {
        id: 1,
        nombre: "Curso introductorio al mundo de los criptoactivos",
        imgPath: "curso.jpg",
        descripcion: "Descubre el mundo de las criptomonedas y conviértete en un experto del tema. Conocé los motivos de su creación, y cómo se compran e intercambian las criptomonedas.",
    },
    {
        id: 2,
        nombre: "Inversión y trading de criptomonedas",
        imgPath: "curso2.jpg",
        descripcion: "Este curso tiene como finalidad familiarizar a los participantes al mundo de la 'Inversión con Criptomonedas', comenzando por la descripción y sus características, hasta lograr implementar herramientas para su operatoria y trading. Adicionalmente, también brindamos recomendaciones para realizar operaciones, normas de seguridad a tener en cuenta, y sitios fiables. Esta instancia de fromación constituye, sin duda, una base fundamental para quienes quieran comenzar con la operatoria de 'Criptomonedas', y lo hagan con seguridad, pasión y las herramientas necesarias.",
    },
    {
        id: 3,
        nombre: "Analista Técnico financiero y bursátil",
        imgPath: "curso3.jpg",
        descripcion: "Gracias a este curso de análisis técnico los participantes podrán comprender los mercados financieros, para que puedan hacer sus propios análisis de inversión y desarrollar sus estrategias o sistemas de trading Rentables. El programa tiene un enfoque práctico y de aplicación inmediata. Esta instancia formativa está pensada para ser cursada de forma independiente, pero su aprobación, más las de los siguientes tres cursos: Analista de Inversiones y Mercados financieros, con aplicación de simulador de operaciones bursátiles en tiempo real Ejecutivo en Finanzas y Mercado de Capitales Administrador de inversiones y Gestión de Patrimonios Financieros, con aplicación de simulador de operaciones bursátiles en tiempo real. Dará lugar a que los participantes obtengan el Certificado de Experto Universitario en Mercado de Capitales."
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
    }
}

module.exports = cursosController;