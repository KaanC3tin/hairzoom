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
export type GalleryItem = {
    id: string;
    href: string;
}
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
        id: 'service',
        title: 'Hizmetlerimiz',
        href: '#service',
    },
    {
        id: 'about',
        title: 'Hakkımızda',
        href: '#about',
    },
    {
        id: 'gallery',
        title: 'Galeri',
        href: '#gallery',
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
        hour: '08:00  - 20:00',
    },
    {
        day: 'Salı',
        hour: '08:00  - 20:00',
    },
    {
        day: 'Çarşamba',
        hour: '08:00  - 20:00',
    },
    {
        day: 'Perşembe',
        hour: '08:00  - 20:00',
    },
    {
        day: 'Cuma',
        hour: '08:00  - 20:00',
    },
    {
        day: 'Cumartesi',
        hour: '08:00  - 20:00',
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

export const services: ServicesItem[] = [
    {
        categoryTitle: 'Erkek Bölümü Hizmetlerimiz',
        category: 'erkek',
        items: [
            {
                title: 'Saç Kesimi',
                description: 'Yüz hatlarınıza uygun, modern ve stil sahibi saç kesimi.',
                price: '400₺',
                href: '#sac-kesimi-erkek'
            },
            {
                title: 'Saç Botoksu',
                description: 'Mat ve yıpranmış saçlar için derinlemesine onarıcı bakım.',
                price: '350₺',
                href: '#sac-botoksu-erkek'
            },
            {
                title: 'Saç Şekillendirme',
                description: 'Günlük stilinize uygun profesyonel saç tasarımı.',
                price: '350₺',
                href: '#sac-botoksu-erkek'
            },
            {
                title: 'Sakal Tasarımı',
                description: 'Yüz yapınıza özel, özenle şekillendirilmiş sakal stili.',
                price: '200₺',
                href: '#sakal-tasarimi'
            },
            {
                title: 'Kaş Tasarımı',
                description: 'Doğal görünümünüzü tamamlayan detaylı kaş düzenlemesi.',
                price: '200₺',
                href: '#kas-tasarimi'
            },
            {
                title: 'Saç Yıkama',
                description: 'Ferahlık ve bakım sağlayan özel şampuanlama hizmeti.',
                price: '100₺',
                href: '#sac-yikama'
            },
        ],
    },
    {
        categoryTitle: 'Kadın Bölümü Hizmetlerimiz',
        category: 'kadın',
        items: [
            {
                title: 'Saç Bakımı',
                description: 'Canlılık, parlaklık ve güç kazandıran yoğun saç bakımı.',
                price: '1000₺',
                href: '#sac-bakimi-kadin'
            },
            {
                title: 'Ombre',
                description: 'Saçta doğal geçişlerle ışıltılı ve sofistike bir görünüm.',
                price: '4500-7500₺',
                href: '#ombre'
            },
            {
                title: 'Manikür',
                description: 'Bakımlı eller için detaylı tırnak temizliği ve şekillendirme.',
                price: '300₺',
                href: '#manikur-pedkikur-kadin'
            },
            {
                title: 'Pedikür',
                description: 'Ayaklara ferahlık kazandıran hijyenik ve estetik bakım.',
                price: '300₺',
                href: '#manikur-pedkikur-kadin'
            },
            {
                title: 'Profesyonel Makyaj',
                description: 'Cilt tonunuza uygun, zarif ve kalıcı makyaj uygulaması.',
                price: '550₺',
                href: '#profesyonel-makyaj'
            },
            {
                title: 'Gelin Saçı & Makyajı',
                description: 'Düğün gününüz için özel tasarlanmış saç ve makyaj uyumu.',
                price: '9700₺',
                href: '#gelin-saci-makyaji'
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

export const gallery: GalleryItem[] = [
    {
        id: '1',
        href: '/images/galeria-1.jpeg'

    },
    {
        id: '2',
        href: '/images/galeria-2.jpeg'

    }, {
        id: '3',
        href: '/images/galeria-3.jpeg'

    }, {
        id: '4',
        href: '/images/galeria-4.jpeg'

    }, {
        id: '5',
        href: '/images/galeria-5.jpeg'

    }, {
        id: '6',
        href: '/images/galeria-6.jpeg'

    }, {
        id: '7',
        href: '/images/galeria-7.jpeg'

    }, {
        id: '8',
        href: '/images/galeria-8.jpeg'

    }, {
        id: '9',
        href: '/images/galeria-9.jpg'

    },
]