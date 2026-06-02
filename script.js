new Chart(document.getElementById("otro"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },

                },
            });


new Chart(document.getElementById("dispersion"), {
    type: "bubble",
    data: {
        datasets: [
            {
                label: "Bubble Dataset",
                data: [
                    /*
                      Campos:
                        name          — nombre del programa
                        x             — años de acreditación institucional (CNA)
                        y             — ingreso mediano al 4.° año de egreso en CLP (Futuro Laboral)
                        r             — radio proporcional al arancel anual (ver escala abajo)
                        arancel       — arancel real en CLP (para el tooltip)
                      
                      Radio: normalizado linealmente entre r=4 (arancel ~$4.000.000)
                      y r=18 (arancel ~$10.400.000).
                      Fórmula aplicada: r = 4 + ((arancel - 4000000) / 6400000) * 14
                    */
                    { name: "DISEÑO — UNIACC",                               x: 3, y:  580000, r:  4.1, arancel:  4030000 },
                    { name: "DISEÑO EN COMUNICACIÓN VISUAL — UTEM",          x: 4, y:  620000, r:  4.8, arancel:  4763300 },
                    { name: "DISEÑO INDUSTRIAL — UTEM",                      x: 4, y:  670000, r:  5.0, arancel:  4891000 },
                    { name: "DISEÑO — U. GABRIELA MISTRAL",                  x: 4, y:  590000, r:  4.8, arancel:  4814000 },
                    { name: "DISEÑO — U. DE VIÑA DEL MAR",                   x: 4, y:  560000, r:  4.1, arancel:  4277000 },
                    { name: "DISEÑO — U. DE LA SERENA",                      x: 5, y:  590000, r:  4.2, arancel:  4071000 },
                    { name: "DISEÑO GRÁFICO — U. DEL BÍO-BÍO",              x: 5, y:  610000, r:  4.1, arancel:  4307000 },
                    { name: "DISEÑO INDUSTRIAL — U. DEL BÍO-BÍO",           x: 5, y:  680000, r:  4.3, arancel:  4434000 },
                    { name: "DISEÑO — U. DE LAS AMÉRICAS",                   x: 5, y:  600000, r:  4.8, arancel:  4730000 },
                    { name: "DISEÑO — U. CATÓLICA DE TEMUCO",                x: 5, y:  630000, r:  5.3, arancel:  5276000 },
                    { name: "DISEÑO GRÁFICO — U. DE ANTOFAGASTA",            x: 5, y:  610000, r:  5.1, arancel:  5120000 },
                    { name: "DISEÑO — U. DE PLAYA ANCHA",                    x: 5, y:  580000, r:  4.3, arancel:  4305000 },
                    { name: "INGENIERÍA RV Y JUEGOS — U. BERNARDO O'HIGGINS",x: 5, y:  720000, r:  5.9, arancel:  5900000 },
                    { name: "DISEÑO MENCIÓN — U. MAYOR",                     x: 5, y:  730000, r: 10.0, arancel:  7214218 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT — U. FINIS TERRAE", x: 5, y:  760000, r: 10.2, arancel:  7320000 },
                    { name: "DISEÑO — U. FINIS TERRAE",                      x: 5, y:  730000, r: 10.2, arancel:  7320000 },
                    { name: "DISEÑO — U. AUSTRAL DE CHILE",                  x: 6, y:  680000, r:  5.9, arancel:  5887000 },
                    { name: "DISEÑO — U. DE TALCA",                          x: 6, y:  650000, r:  5.9, arancel:  5887000 },
                    { name: "DISEÑO — U. DE VALPARAÍSO",                     x: 6, y:  660000, r:  5.7, arancel:  5713000 },
                    { name: "DISEÑO MULTIMEDIA — U. DE TARAPACÁ",            x: 6, y:  670000, r:  6.6, arancel:  6555000 },
                    { name: "INGENIERÍA EN DISEÑO — USM",                    x: 6, y:  980000, r:  6.0, arancel:  6000000 },
                    { name: "INGENIERÍA FAB. Y DISEÑO IND. — USM",           x: 6, y:  950000, r:  5.2, arancel:  5180000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES — U. ANDRÉS BELLO",  x: 6, y:  740000, r:  9.9, arancel:  7136000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL — U. ANDRÉS BELLO",x: 6, y:  720000, r: 10.0, arancel:  7148000 },
                    { name: "DISEÑO GRÁFICO — U. ANDRÉS BELLO",              x: 6, y:  730000, r:  9.8, arancel:  7065000 },
                    { name: "DISEÑO — U. DIEGO PORTALES",                    x: 6, y:  790000, r: 10.6, arancel:  7597000 },
                    { name: "INGENIERÍA EN DISEÑO — U. ADOLFO IBÁÑEZ",       x: 6, y: 1180000, r: 15.3, arancel:  9754692 },
                    { name: "DISEÑO — U. DEL DESARROLLO",                    x: 6, y:  980000, r: 15.3, arancel:  9754692 },
                    { name: "BACHILLERATO EN DISEÑO — U. DEL DESARROLLO",    x: 6, y:  870000, r: 16.2, arancel: 10364360 },
                    { name: "DISEÑO INDUSTRIAL — USACH",                     x: 7, y:  790000, r:  5.0, arancel:  4989000 },
                    { name: "DISEÑO EN COM. VISUAL — USACH",                 x: 7, y:  780000, r:  6.6, arancel:  6552000 },
                    { name: "DISEÑO TEATRAL — U. DE CHILE",                  x: 7, y:  650000, r:  6.5, arancel:  5492400 },
                    { name: "DISEÑO — U. DE CHILE",                          x: 7, y:  870000, r:  6.5, arancel:  6486700 },
                    { name: "DISEÑO — PUCV",                                 x: 7, y:  820000, r:  9.7, arancel:  6915000 },
                    { name: "DISEÑO — PUC",                                  x: 7, y: 1050000, r: 14.0, arancel:  8080000 },
                ],
                backgroundColor: "rgba(241,142,45,.65)",
                borderColor: "rgba(241,142,45,1)",
                borderWidth: 1,
                hoverBorderWidth: 2,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                min: 2,
                max: 8,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Acreditación: " + point.x + " años",
                            "Ingreso 4.° año: $ " + point.y.toLocaleString("es-CL"),
                            "Arancel anual: $ " + point.arancel.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});
 
