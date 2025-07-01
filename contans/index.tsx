// first commit
//test commit
export type NavLinkItem = {
    id: string;
    title: string;
    href: string;
};

export type ContactInformationItem = {
    phone: string;
    email: string
    address: string;
};

export type LocationLinkItem = {
    id: string;
    title: string;
    href: string;
}

export type OpeningHourItem = {
    day: string;
    hour: string;
};

export type SocialLinksItem = {
    id: string;
    title: string;
    href: string;
};

export type TeamMembersItem = {
    id: string;
    name: string;
    role: string;
    image: string;
};

export type AboutItem = {
    title: string;
    description: string;
    image: string;
};

// export type ServicesItem = {
//     categoryTitle: string;
//     category: string;
//     items: {
//         title: string;
//         description: string;
//         image: string;
//     }[];
// };

export type ServicesItem = {
    categoryTitle: string;
    category: string;
    items: {
        title: string;
        image: string;
        description: string;
        price: string;
        href: string;
    }[];
}

export type FaqItem = {
    id: number,
    title: string,
    description: string,

}

export const navLinks: NavLinkItem[] = [
    {
        id: 'home',
        title: 'Anasayfa',
        href: '#home',
    },
    {
        id: 'art',
        title: 'Hakkımızda',
        href: '#art',
    },
    {
        id: 'service',
        title: 'Hizmetlerimiz',
        href: '#service',
    },
    {
        id: 'contact',
        title: 'İletişim',
        href: '#contact',
    },
];

export const openingHours: OpeningHourItem[] = [
    {
        day: 'Pazartesi',
        hour: '10:00  - 8:00',
    },
    {
        day: 'Salı',
        hour: '10:00  - 8:00',
    },
    {
        day: 'Çarşamba',
        hour: '10:00  - 8:00',
    },
    {
        day: 'Perşembe',
        hour: '10:00  - 8:00',
    },
    {
        day: 'Cuma',
        hour: '10:00  - 10:00',
    },
    {
        day: 'Cumartesi',
        hour: '10:00  - 10:00',
    },
    {
        day: 'Pazar',
        hour: 'Kapalı',
    },
];

export const socialLinks: SocialLinksItem[] = [
    {
        id: 'instagram',
        title: 'Instagram',
        href: 'https://www.instagram.com/hairzoom/',
    },
    {
        id: 'facebook',
        title: 'Facebook',
        href: 'https://www.facebook.com/hairzoom/',
    },
    {
        id: 'twitter',
        title: 'Twitter',
        href: 'https://twitter.com/hairzoom',
    },
];

export const contactInformation: ContactInformationItem[] = [
    {
        phone: '0546 820 01 20',
        email: 'burakkayabasi20@icloud.com',
        address: 'Kınıklı Mahhallesi Doğan Demircioğlu Caddesi No:75/A Pamukkale, 20150 Denizli Merkez/Denizli'
    },
]

// export const locationLinks: LocationLinkItem[] = [
//     {
//         id: 1,
//         title: 'Konum',
//         href: '#googlePreview'
//     }, {
//         id: 2,
//         title: 'SSS',
//         href: '#faq'
//     }, {

//     }
// ]
// hizmetlerimiz bölümünden hem kadın hemde erkek için footer kısmına eklenecek + İşletme açılış kapanış saatleri + 
export const teamMembers: TeamMembersItem[] = [
    {
        id: 'burak',
        name: 'Burak Kayabaşı',
        role: 'Founder & CEO',
        image: '/images/team/burak.jpg',
    },
    {
        id: 'ayse',
        name: 'Ayşe Yılmaz',
        role: 'Creative Director',
        image: '/images/team/ayse.jpg',
    },
    {
        id: 'mehmet',
        name: 'Mehmet Demir',
        role: 'Lead Stylist',
        image: '/images/team/mehmet.jpg',
    },
];

export const aboutContent: AboutItem[] = [
    {
        title: 'Biz Kimiz?',
        description: 'Velvet Pour, Denizli\'deki en iyi kuaför salonlarından biridir. Müşterilerimize en iyi hizmeti sunmak için buradayız. Uzman ekibimizle saç kesimi, renklendirme ve stil hizmetleri sunuyoruz.',
        image: '/images/about.jpg',
    }
];

// export const services: ServicesItem[] = [
//     {
//         categoryTitle: 'Erkek Bölümü Hizmetlerimiz',
//         category: 'erkek',
//         items: [
//             {
//                 title: 'Saç Kesimi',
//                 description: 'Profesyonel saç kesimi hizmeti ile yeni bir görünüm kazanın.',
//                 image: '/images/services/haircut.jpg',
//             },
//             {
//                 title: 'Saç Renklendirme',
//                 description: 'En son trendlerle saçınızı renklendirin.',
//                 image: '/images/services/coloring.jpg',
//             },
//             {
//                 title: 'Saç Şekillendirme',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Saç Botoksu',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Kaş Tasarımı',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Manikür',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Damat Traşı',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//         ]
//     },
//     {
//         categoryTitle: 'Kadın Bölümü Hizmetlerimiz',
//         category: 'kadın',
//         items: [
//             {
//                 title: 'Saç Renklendirme',
//                 description: 'En son trendlerle saçınızı renklendirin.',
//                 image: '/images/services/coloring.jpg',
//             },
//             {
//                 title: 'Cilt Bakımı',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Topuz',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Pedikür',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Manikür',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Kaş Tasarımı',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Saç Düzleştirme',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//             {
//                 title: 'Saç Tasarımı',
//                 description: 'Özel günler için saçınızı stilize edin.',
//                 image: '/images/services/styling.jpg',
//             },
//         ]
//     }
// ];

// export const services: ServicesItem[] = [
//     {
//         title: 'Keratin Bakımı',
//         description: 'Saçlarınıza parlaklık ve sağlık kazandıran özel keratin bakımı.',
//         image: '/images/services/keratin.jpg',
//     },
//     {
//         title: 'Saç Renklendirme (Balayage / Ombre)',
//         description: 'En yeni trendlerle kusursuz renklendirme teknikleri.',
//         image: '/images/services/coloring.jpg',
//     },
//     {
//         title: 'Cilt Bakımı ve Güzellik Ritüeli',
//         description: 'Lüks cilt bakımı ile tazelenin ve ışıldayın.',
//         image: '/images/services/skincare.jpg',
//     },
//     {
//         title: 'Gelin Saçı & Makyajı',
//         description: 'Özel gününüzde en güzel haliniz için profesyonel hazırlık.',
//         image: '/images/services/bridal.jpg',
//     },
//     {
//         title: 'Damat Traşı (VIP)',
//         description: 'Özel günlerde size özel bakım ve stil deneyimi.',
//         image: '/images/services/groom.jpg',
//     },
//     {
//         title: 'Kaş Laminasyonu & Tasarımı',
//         description: 'Yüzünüze uygun profesyonel kaş şekillendirme ve sabitleme.',
//         image: '/images/services/brows.jpg',
//     },
// ];

export const services: ServicesItem[] = [
    {
        categoryTitle: 'Erkek Bölümü Hizmetlerimiz',
        category: 'erkek',
        items: [
            {
                title: 'Damat Traşı (VIP)',
                description: 'Özel günlerde size özel bakım ve stil deneyimi.',
                image: '/images/services/groom.jpg',
                price: '450₺',
                href: '#damat-trasi'
            },
            {
                title: 'Saç Kesimi',
                description: 'Profesyonel saç kesimi hizmeti ile yeni bir görünüm kazanın.',
                image: '/images/services/haircut.jpg',
                price: '200₺',
                href: '#sac-kesimi-erkek'
            },
            {
                title: 'Saç Botoksu',
                description: 'Yıpranmış saçlar için onarıcı bakım.',
                image: '/images/services/hair-botox.jpg',
                price: '350₺',
                href: '#sac-botoksu-erkek'
            },
            {
                title: 'Sakal Tasarımı',
                description: 'Yüz hatlarınıza uygun profesyonel sakal şekillendirme.',
                image: '/images/services/beard.jpg',
                price: '180₺',
                href: '#sakal-tasarimi'
            },
            {
                title: 'Manikür (Erkek)',
                description: 'Bakımlı eller için detaylı manikür uygulaması.',
                image: '/images/services/mens-manicure.jpg',
                price: '150₺',
                href: '#manikur-erkek'
            },
            {
                title: 'Kaş Tasarımı',
                description: 'Yüz şekline uygun kaş düzenlemesi ve bakımı.',
                image: '/images/services/brows.jpg',
                price: '170₺',
                href: '#kas-tasarimi-erkek'
            },
        ],
    },
    {
        categoryTitle: 'Kadın Bölümü Hizmetlerimiz',
        category: 'kadın',
        items: [
            {
                title: 'Gelin Saçı & Makyajı',
                description: 'En özel gününüzde size özel saç ve makyaj tasarımı.',
                image: '/images/services/bridal.jpg',
                price: '1500₺',
                href: '#gelin-saci-makyaji'
            },
            {
                title: 'Keratin Bakımı',
                description: 'Saçlarınıza sağlık ve parlaklık kazandırın.',
                image: '/images/services/keratin.jpg',
                price: '700₺',
                href: '#keratin-bakimi-kadin'
            },
            {
                title: 'Saç Renklendirme (Balayage / Ombre)',
                description: 'Trend renk geçişleriyle modern görünüm.',
                image: '/images/services/coloring.jpg',
                price: '850₺',
                href: '#sac-reklendirme-kadin'
            },
            {
                title: 'Cilt Bakımı',
                description: 'Cildinize tazelik ve ışıltı kazandıran lüks bakım.',
                image: '/images/services/skincare.jpg',
                price: '600₺',
                href: '#cilt-bakimi-kadin'
            },
            {
                title: 'Manikür & Pedikür',
                description: 'Profesyonel el ve ayak bakımı hizmeti.',
                image: '/images/services/nails.jpg',
                price: '300₺',
                href: '#manikur-pedkikur-kadin'
            },
            {
                title: 'Saç Düzleştirme',
                description: 'Düz, pürüzsüz ve sağlıklı görünen saçlar.',
                image: '/images/services/straightening.jpg',
                price: '550₺',
                href: '#sac-duzlestirme-kadin'
            },
        ],
    },
];


export const faqs: FaqItem[] = [
    {
        id: 1,
        title: 'Randevu almadan gelebilir miyim?',
        description: 'Evet, randevusuz müşterilerimizi de kabul ediyoruz. Ancak yoğunluk yaşanmaması adına randevu almanızı tavsiye ederiz.',
    },
    {
        id: 2,
        title: 'Hangi hizmetleri sunuyorsunuz?',
        description: 'Erkek ve kadın saç kesimi, saç boyama, ombre, fön, keratin bakım, sakal tıraşı, cilt bakımı ve özel gün makyajı gibi geniş bir hizmet yelpazesi sunmaktayız.'
    },
    {
        id: 3,
        title: 'Hangi ürünleri kullanıyorsunuz?',
        description: 'Dünya çapında tanınan, saç ve cilt sağlığına zarar vermeyen profesyonel ürünler kullanıyoruz. Marka detayları için salonumuzdaki uzmanlarımızdan bilgi alabilirsiniz.'
    },
    {
        id: 4,
        title: 'Kadın ve erkek bölümleri ayrı mı?',
        description: 'Evet, salonumuzda kadın ve erkek müşterilerimiz için ayrı alanlar bulunmaktadır. Böylece konforlu ve özel bir hizmet deneyimi sunuyoruz.'
    },
    {
        id: 5,
        title: 'Saç bakımı ve işlemler hakkında önceden danışabilir miyim?',
        description: 'Elbette! Salonumuza gelerek ya da telefonla bize ulaşarak uzmanlarımızdan ücretsiz danışmanlık alabilirsiniz.'
    },
    {
        id: 6,
        title: 'Ödeme yöntemleriniz nelerdir?',
        description: 'Nakit, kredi kartı ve temassız ödeme seçeneklerimiz mevcuttur. Tüm işlemleriniz güvenle gerçekleştirilmektedir.',
    }

];