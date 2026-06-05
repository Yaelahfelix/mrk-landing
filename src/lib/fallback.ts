import type { HomeData, Settings } from "./types";

export const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Proyek", href: "#proyek" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Tim", href: "#tim" },
  { label: "FAQ", href: "#faq" },
] as const;

/**
 * Konten default. Dipakai saat Sanity belum dikonfigurasi / belum ada konten,
 * sehingga landing page tetap tampil lengkap dan rapi.
 * Begitu konten di /studio diisi, data dari Sanity otomatis menggantikan ini.
 */
export const fallbackSettings: Settings = {
  companyName: "PT Maulida Rafa Kurnia",
  shortName: "MRK",
  contact: {
    email: "halo@mrksolution.id",
    phone: "+62 812-3456-7890",
    whatsapp: "6281234567890",
    address: "Yogyakarta, Indonesia",
  },
  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" },
  ],
  footerNote:
    "Membangun produk digital yang cepat, aman, dan siap berkembang bersama PT Maulida Rafa Kurnia.",
};

export const fallbackHome: HomeData = {
  hero: {
    badge: "Agensi IT Terpercaya",
    headline: "Wujudkan Transformasi Digital Bisnis Anda",
    highlight: "Transformasi Digital",
    subheadline:
      "MRK membantu perusahaan membangun website, aplikasi mobile, dan sistem digital yang cepat, aman, dan siap berkembang — dari ide hingga peluncuran.",
    primaryCta: { label: "Mulai Proyek", href: "#kontak" },
    secondaryCta: { label: "Lihat Portofolio", href: "#proyek" },
  },
  stats: [
    { value: 120, suffix: "+", label: "Proyek Selesai" },
    { value: 80, suffix: "+", label: "Klien Puas" },
    { value: 8, suffix: " thn", label: "Pengalaman" },
    { value: 25, suffix: "+", label: "Tim Ahli" },
  ],
  services: [
    {
      _id: "s1",
      title: "Pengembangan Website",
      icon: "globe",
      description:
        "Website company profile, landing page, dan portal yang cepat, responsif, dan SEO-friendly.",
      features: ["Desain modern", "Performa tinggi", "SEO ready"],
    },
    {
      _id: "s2",
      title: "Aplikasi Mobile",
      icon: "smartphone",
      description:
        "Aplikasi Android & iOS yang mulus untuk menjangkau pelanggan Anda di mana saja.",
      features: ["Android & iOS", "UI/UX intuitif", "Notifikasi push"],
    },
    {
      _id: "s3",
      title: "Custom Software & SaaS",
      icon: "code",
      description:
        "Sistem internal, ERP, dan platform SaaS yang dirancang sesuai proses bisnis Anda.",
      features: ["Skalabel", "Aman", "Terintegrasi API"],
    },
    {
      _id: "s4",
      title: "Cloud & DevOps",
      icon: "cloud",
      description:
        "Deployment, monitoring, dan infrastruktur cloud yang andal dengan biaya efisien.",
      features: ["CI/CD", "Auto-scaling", "Monitoring 24/7"],
    },
    {
      _id: "s5",
      title: "UI/UX Design",
      icon: "palette",
      description:
        "Riset, wireframe, hingga prototipe interaktif yang berfokus pada pengalaman pengguna.",
      features: ["Riset pengguna", "Prototyping", "Design system"],
    },
    {
      _id: "s6",
      title: "AI & Otomasi",
      icon: "cpu",
      description:
        "Integrasi AI, chatbot, dan otomasi proses untuk meningkatkan produktivitas tim.",
      features: ["Chatbot AI", "Otomasi alur", "Analitik cerdas"],
    },
  ],
  projects: [
    {
      _id: "p1",
      title: "Portal Pelayanan Publik",
      category: "Web App / SaaS",
      client: "Pemerintah Daerah",
      year: "2025",
      featured: true,
      description:
        "Portal terpadu untuk layanan administrasi publik dengan dashboard real-time.",
      tags: ["Next.js", "PostgreSQL", "Tailwind"],
    },
    {
      _id: "p2",
      title: "Aplikasi Billing PDAM",
      category: "Sistem Internal",
      client: "PDAM",
      year: "2024",
      featured: true,
      description:
        "Sistem penagihan dan pencatatan meter air dengan notifikasi WhatsApp otomatis.",
      tags: ["Laravel", "MySQL", "WhatsApp API"],
    },
    {
      _id: "p3",
      title: "E-Commerce Fashion",
      category: "E-Commerce",
      client: "Retail Brand",
      year: "2024",
      description:
        "Toko online dengan pembayaran terintegrasi dan manajemen stok multi-gudang.",
      tags: ["Next.js", "Midtrans", "Sanity"],
    },
    {
      _id: "p4",
      title: "Aplikasi Akuntansi Sekolah",
      category: "Web App / SaaS",
      client: "Yayasan Pendidikan",
      year: "2025",
      description:
        "Pencatatan keuangan sekolah, SPP, dan laporan otomatis untuk yayasan.",
      tags: ["Next.js", "Supabase"],
    },
    {
      _id: "p5",
      title: "Mobile Baca Meter",
      category: "Aplikasi Mobile",
      client: "PDAM",
      year: "2024",
      description:
        "Aplikasi lapangan untuk petugas baca meter dengan mode offline & sinkronisasi.",
      tags: ["Flutter", "REST API"],
    },
    {
      _id: "p6",
      title: "Dashboard Analitik",
      category: "Web App / SaaS",
      client: "Startup",
      year: "2025",
      description:
        "Visualisasi data bisnis real-time dengan laporan yang dapat diunduh.",
      tags: ["React", "Chart.js"],
    },
  ],
  process: [
    {
      _id: "pr1",
      step: "01",
      title: "Konsultasi & Riset",
      description:
        "Kami memahami tujuan bisnis, kebutuhan pengguna, dan menyusun strategi yang tepat.",
    },
    {
      _id: "pr2",
      step: "02",
      title: "Desain & Prototipe",
      description:
        "Membuat wireframe dan prototipe interaktif yang bisa Anda lihat sebelum dibangun.",
    },
    {
      _id: "pr3",
      step: "03",
      title: "Pengembangan",
      description:
        "Tim kami membangun produk dengan praktik terbaik, teruji, dan terdokumentasi.",
    },
    {
      _id: "pr4",
      step: "04",
      title: "Peluncuran & Dukungan",
      description:
        "Deploy, pelatihan tim Anda, dan dukungan berkelanjutan setelah peluncuran.",
    },
  ],
  testimonials: [
    {
      _id: "t1",
      name: "Andi Wijaya",
      role: "Direktur",
      company: "Retail Brand",
      rating: 5,
      quote:
        "MRK mengubah ide kami menjadi platform yang benar-benar bekerja. Profesional, cepat, dan komunikatif.",
    },
    {
      _id: "t2",
      name: "Siti Rahma",
      role: "Kepala IT",
      company: "PDAM",
      rating: 5,
      quote:
        "Sistem yang dibangun stabil dan sangat membantu operasional harian kami. Tim support-nya responsif.",
    },
    {
      _id: "t3",
      name: "Budi Santoso",
      role: "Founder",
      company: "Startup Tech",
      rating: 5,
      quote:
        "Dari desain sampai deploy, semuanya rapi. Hasil akhirnya melebihi ekspektasi kami.",
    },
  ],
  clients: [
    { _id: "c1", name: "PDAM" },
    { _id: "c2", name: "Pemda" },
    { _id: "c3", name: "Yayasan" },
    { _id: "c4", name: "Retail" },
    { _id: "c5", name: "Startup" },
    { _id: "c6", name: "Sekolah" },
  ],
  team: [
    { _id: "m1", name: "Tim Engineering", role: "Backend & Frontend" },
    { _id: "m2", name: "Tim Desain", role: "UI/UX Designer" },
    { _id: "m3", name: "Tim Mobile", role: "Android & iOS" },
    { _id: "m4", name: "Tim DevOps", role: "Cloud & Infrastruktur" },
  ],
  faqs: [
    {
      _id: "f1",
      question: "Berapa lama waktu pengerjaan sebuah proyek?",
      answer:
        "Tergantung kompleksitas. Landing page bisa 1–2 minggu, sementara aplikasi besar 1–3 bulan. Kami selalu memberi estimasi jelas di awal.",
    },
    {
      _id: "f2",
      question: "Apakah bisa request fitur custom?",
      answer:
        "Tentu. Semua solusi kami dibangun sesuai kebutuhan bisnis Anda, bukan template generik.",
    },
    {
      _id: "f3",
      question: "Apakah ada dukungan setelah peluncuran?",
      answer:
        "Ya, kami menyediakan paket maintenance dan dukungan teknis berkelanjutan.",
    },
    {
      _id: "f4",
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "Umumnya bertahap: DP di awal, termin saat milestone, dan pelunasan saat serah terima.",
    },
  ],
};
