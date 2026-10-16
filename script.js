const gymsData = [
    {
        id: 1,
        nameAr: "جيم الأبطال - Champions Gym",
        nameEn: "Champions Gym",
        areaAr: "الملاحة - السويس",
        areaEn: "El Malaha - Suez",
        addressAr: "شارع الجيش، بجوار برج الملاحة، السويس",
        addressEn: "El Geish St, Near El Malaha Tower, Suez",
        priceAr: "450 ج.م / شهرياً",
        priceEn: "450 EGP / Month",
        descAr: "جيم متكامل بأحدث الأجهزة الرياضية مع مدربين معتمدين لبناء الأجسام واللياقة البدنية.",
        descEn: "Fully equipped gym with modern devices and certified trainers for bodybuilding and fitness.",
        lat: 29.9668, lng: 32.5498,
        mainImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80"
        ],
        trainers: [
            { nameAr: "كابتن أحمد سعيد", nameEn: "Capt. Ahmed Said", roleAr: "مدرب كمال أجسام", roleEn: "Bodybuilding Coach", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=200&q=80" },
            { nameAr: "كابتن محمود حسن", nameEn: "Capt. Mahmoud Hassan", roleAr: "أخصائي فتنس وتخسيس", roleEn: "Fitness & Weight Loss", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" }
        ]
    },
    {
        id: 2,
        nameAr: "بيج رامي فاميلي جيم - Big Ramy Gym",
        nameEn: "Big Ramy Family Gym",
        areaAr: "الشهداء - السويس",
        areaEn: "El Shohada - Suez",
        addressAr: "منطقة الشهداء، خلف المجمع الإسكاني، السويس",
        addressEn: "El Shohada Area, Behind Housing Complex, Suez",
        priceAr: "600 ج.م / شهرياً",
        priceEn: "600 EGP / Month",
        descAr: "صالة رياضية ضخمة تحتوي على أجهزة كارديو حديثة، ساونا، وخدمات الاستشفاء.",
        descEn: "Huge fitness center featuring modern cardio machines, sauna, and recovery services.",
        lat: 29.9592, lng: 32.5531,
        mainImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80"
        ],
        trainers: [
            { nameAr: "كابتن علي طارق", nameEn: "Capt. Ali Tarek", roleAr: "مدرب إعداد بدني", roleEn: "Physical Prep", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" }
        ]
    },
    {
        id: 3,
        nameAr: "فايترز جيم - Fighters Gym",
        nameEn: "Fighters Gym",
        areaAr: "الصباح - السويس",
        areaEn: "El Sabah - Suez",
        addressAr: "مدينة الصباح، بجوار السوق التجاري، السويس",
        addressEn: "El Sabah City, Next to Commercial Market, Suez",
        priceAr: "400 ج.م / شهرياً",
        priceEn: "400 EGP / Month",
        descAr: "متخصص في ألعاب القوة والفنون القتالية وبناء العضلات بأسعار مناسبة.",
        descEn: "Specialized in martial arts, powerlifting, and muscle building at affordable rates.",
        lat: 29.9510, lng: 32.5705,
        mainImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80"
        ],
        trainers: [
            { nameAr: "كابتن عمر القاضي", nameEn: "Capt. Omar El Kady", roleAr: "مدرب فنون قتالية", roleEn: "Martial Arts Coach", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gymGrid = document.getElementById('gymGrid');
    if (gymGrid) {
        gymGrid.innerHTML = gymsData.map(gym => `
            <a href="gym-details.html?id=${gym.id}" class="gym-card">
                <img src="${gym.mainImage}" alt="${gym.nameEn}" loading="lazy">
                <div class="gym-card-body">
                    <span class="gym-area-badge">${gym.areaAr} | ${gym.areaEn}</span>
                    <h3>${gym.nameAr}</h3>
                    <div class="gym-price-tag">${gym.priceAr}</div>
                </div>
            </a>
        `).join('');
    }

    const btnNav = document.getElementById('findNearestBtnNav');
    const btnMain = document.getElementById('findNearestBtnMain');
    if (btnNav) btnNav.addEventListener('click', locateNearestGym);
    if (btnMain) btnMain.addEventListener('click', locateNearestGym);
});

function locateNearestGym() {
    if (!navigator.geolocation) {
        showToast("المتصفح لا يدعم تحديد الموقع");
        return;
    }
    showToast("جاري تحديد موقعك في السويس...");
    navigator.geolocation.getCurrentPosition((pos) => {
        const uLat = pos.coords.latitude;
        const uLng = pos.coords.longitude;
        let nearest = gymsData[0];
        let minDist = 999999;
        gymsData.forEach(gym => {
            const dist = Math.hypot(gym.lat - uLat, gym.lng - uLng);
            if (dist < minDist) { minDist = dist; nearest = gym; }
        });
        showToast(`🎯 أقرب جيم ليك: ${nearest.nameAr}`);
        setTimeout(() => { window.location.href = `gym-details.html?id=${nearest.id}`; }, 1500);
    }, () => { showToast("يرجى تفعيل إذن الموقع الجغرافي"); });
}

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

function loadGymDetailsPage() {
    const container = document.getElementById('detailsContainer');
    const params = new URLSearchParams(window.location.search);
    const gymId = parseInt(params.get('id'));
    const gym = gymsData.find(g => g.id === gymId);

    if (!gym || !container) {
        if (container) container.innerHTML = "<h2>الجيم غير موجود</h2>";
        return;
    }

    const galleryHTML = gym.gallery ? `
        <h3 class="section-title-sm">📸 صور الجيم الافتراضية / Gym Photos</h3>
        <div class="gym-gallery-grid">
            ${gym.gallery.map(img => `<img src="${img}" alt="Gym">`).join('')}
        </div>
    ` : '';

    const trainersHTML = gym.trainers ? `
        <h3 class="section-title-sm">🏋️‍♂️ مدربين الجيم / Gym Trainers</h3>
        <div class="trainers-grid">
            ${gym.trainers.map(t => `
                <div class="trainer-card">
                    <img src="${t.image}" alt="${t.nameEn}">
                    <h4>${t.nameAr}</h4>
                    <p>${t.roleAr}</p>
                </div>
            `).join('')}
        </div>
    ` : '';

    container.innerHTML = `
        <div class="gym-details-card">
            <div class="details-header-flex">
                <img src="${gym.mainImage}" alt="${gym.nameEn}">
                <div class="details-info-box">
                    <span class="gym-area-badge" style="font-size:1rem;">${gym.areaAr} | ${gym.areaEn}</span>
                    <h1 style="font-size:2.2rem; margin:8px 0;">${gym.nameAr}</h1>
                    <h3 style="color:var(--neon-lime); margin-bottom:20px;">${gym.nameEn}</h3>
                    <p style="margin-bottom:12px;"><strong>العنوان:</strong> ${gym.addressAr}</p>
                    <p style="margin-bottom:15px;"><strong>الاشتراك:</strong> <span class="gym-price-tag" style="font-size:1.3rem;">${gym.priceAr}</span></p>
                    <p style="margin-bottom:25px;"><strong>التفاصيل:</strong> ${gym.descAr}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${gym.lat},${gym.lng}" target="_blank" class="btn-neon-action">
                        فتح خرائط جوجل الاتجاهات ↗
                    </a>
                </div>
            </div>
            ${galleryHTML}
            ${trainersHTML}
        </div>
    `;
}