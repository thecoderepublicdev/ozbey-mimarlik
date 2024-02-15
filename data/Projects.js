import createSlug from "@hooks/createSlug";

const Projects = [
    {
        id: 1,
        status: 'COMPLETED',
        type: 'URBAN_TRANSFORMATION',
        title: "İdeal Palas",
        slug: createSlug("İdeal Palas"),
        thumbnail: "/assets/images/ideal_palas/2.webp",
        gallery: [
            "/assets/images/ideal_palas/1.webp",
            "/assets/images/ideal_palas/2.webp",
            "/assets/images/ideal_palas/3.webp",
            "/assets/images/ideal_palas/4.webp",
            "/assets/images/ideal_palas/5.webp",
            "/assets/images/ideal_palas/6.webp",
            "/assets/images/ideal_palas/7.webp",
            "/assets/images/ideal_palas/8.webp",
            "/assets/images/ideal_palas/9.webp",
            "/assets/images/ideal_palas/10.webp",
        ]
    },
    {
        id: 2,
        status: 'COMPLETED',
        type: 'URBAN_TRANSFORMATION',
        title: "İdealtepe",
        slug: createSlug("İdealtepe"),
        thumbnail: "/assets/images/idealtepe/2.webp",
        gallery: [
            "/assets/images/idealtepe/1.webp",
            "/assets/images/idealtepe/2.webp",
            "/assets/images/idealtepe/3.webp",
            "/assets/images/idealtepe/4.webp",
            "/assets/images/idealtepe/5.webp",
            "/assets/images/idealtepe/6.webp",
            "/assets/images/idealtepe/7.webp"
        ]
    },
    {
        id: 3,
        status: 'COMPLETED',
        type: 'URBAN_TRANSFORMATION',
        title: "Maltepe Aydınevler",
        slug: createSlug("Maltepe Aydınevler"),
        thumbnail: "/assets/images/maltepe_aydinevler/1.webp",
        gallery: [
            "/assets/images/maltepe_aydinevler/1.webp",
            "/assets/images/maltepe_aydinevler/2.webp",
            "/assets/images/maltepe_aydinevler/3.webp",
            "/assets/images/maltepe_aydinevler/4.webp"
        ]
    },
    {
        id: 4,
        status: 'COMPLETED',
        type: 'URBAN_TRANSFORMATION',
        title: "Reşitpaşa",
        slug: createSlug("Reşitpaşa"),
        thumbnail: "/assets/images/sisecam-konutlari/3.webp",
        gallery: [
            "/assets/images/resitpasa/1.webp",
            "/assets/images/resitpasa/2.webp",
            "/assets/images/resitpasa/3.webp"
        ]
    },
    {
        id: 5,
        status: 'COMPLETED',
        type: 'URBAN_TRANSFORMATION',
        title: "Şişecam Konutları",
        slug: createSlug("Şişecam Konutları"),
        thumbnail: "/assets/images/sisecam-konutlari/2.webp",
        gallery: [
            "/assets/images/resitpasa/1.webp",
            "/assets/images/resitpasa/2.webp",
            "/assets/images/resitpasa/3.webp",
            "/assets/images/resitpasa/4.webp"
        ]
    },
]

export default Projects;