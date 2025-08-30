// view-laporan.js
(function(){
  const $ = (s, r=document) => r.querySelector(s);

  function q(name){ return new URL(location.href).searchParams.get(name); }
  function text(id, val, fallback = "-"){ const el = $(id); if (el) el.textContent = (val && String(val).trim()) || fallback; }
  function badge(id, label, cls) {
    const el = $(id);
    if (!el) return;
    el.textContent = label || "-";
    el.className = "badge " + (cls || "bg-secondary");
  }

  // mapping warna status utama (pakai statusToColor kalau sudah ada)
  function statusColor(status){
    return (window.statusToColor ? window.statusToColor(status) : "bg-secondary");
  }
  // mapping warna status analisis
  function analisisColor(s) {
    const key = String(s || "").toLowerCase();
    if (key.includes("selesai") || key.includes("done")) return "bg-green";
    if (key.includes("proses") || key.includes("progress")) return "bg-blue-lt";
    if (key.includes("ditolak") || key.includes("tolak")) return "bg-red";
    if (key.includes("revisi")) return "bg-yellow-lt";
    return "bg-secondary-lt";
  }

  function linkifyList(files) {
    if (!files) return "-";
    // dukung string tunggal, array string, atau array object {name,url}
    if (typeof files === "string") return `<a href="${files}" target="_blank" rel="noopener">${files}</a>`;
    if (Array.isArray(files) && files.length) {
      return files.map((f, i) => {
        if (typeof f === "string") return `<a href="${f}" target="_blank" rel="noopener">Lampiran ${i+1}</a>`;
        const name = f.name || `Lampiran ${i+1}`;
        const url  = f.url  || "#";
        return `<a href="${url}" target="_blank" rel="noopener">${name}</a>`;
      }).join(", ");
    }
    return "-";
  }

  function fillView(d){
    // Header ringkas
    text("#vw-tiket", d.tiket);

    // DL #1
    text("#vw-tiket-dup", d.tiket);
    text("#vw-nik", d.nik, "Tidak diisi");
    text("#vw-email", d.email, "Tidak diisi");
    const elKat = $("#vw-kategori"); if (elKat) elKat.textContent = d.kategori || "-";
    text("#vw-judul", d.judul);
    text("#vw-alamat", d.alamat);
    badge("#vw-status-badge", d.status, statusColor(d.status));
    text("#vw-distribusi", d.distribusi);

    // Status analisis (field di data: `statusAnalisis` / `status_analis` / `status_analisis`)
    const sAnalisis = d.statusAnalisis || d.status_analis || d.status_analisis || "Pending";
    badge("#vw-status-analisis", sAnalisis, analisisColor(sAnalisis));

    // DL #2
    text("#vw-nama", d.nama);
    text("#vw-nohp", d.nohp);
    text("#vw-tgl-kejadian", d.tglKejadian || d.tanggal_kejadian || "Tidak diisi");
    text("#vw-detail", d.detail || d.uraian || d.ringkasan || "-");
    const dok = $("#vw-dokumen"); if (dok) dok.innerHTML = linkifyList(d.dokumen || d.lampiran);
    text("#vw-tanggapan", d.tanggapan || d.tindak_lanjut || "-");
    text("#vw-catatan", d.catatan || d.catatan_disposisi || "-");
    text("#vw-analisis", d.analisis || d.analisis_jf || "-");

    // Log sederhana (kalau tidak ada, pakai fallback)
    const logs = (Array.isArray(d.logs) && d.logs.length) ? d.logs : [
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
      { tgl: d.dikirim || "-", act: "Pengaduan dikirim", by: d.nama || "Pengguna" },
      { tgl: d.dikirim || "-", act: "Proses verifikasi & telaah", by: "Admin" },
    ];
    const tb = $("#vw-logs");
    if (tb) {
      tb.innerHTML = logs.map(l => `
        <tr>
          <td>${l.tgl || "-"}</td>
          <td>${l.act || "-"}</td>
          <td>${l.by  || "-"}</td>
        </tr>`).join("");
    }

    // tombol ke edit
    const editLink = $("#vw-edit-link");
    if (editLink) editLink.href = `edit-laporan-pengaduan.html?tiket=${encodeURIComponent(d.tiket || "")}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const tiket = q("tiket");
    const data = (window.laporanData || []).find(x => String(x.tiket) === String(tiket));
    fillView(data || {});
  });
})();
