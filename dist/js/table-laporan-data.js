// ====== KONFIG (disesuaikan ke kolom dummyTickets) ======
const advancedTable = {
  headers: [
    { "data-sort": "sort-nomor", name: "#" },
    { "data-sort": "sort-nomor-tiket", name: "Nomor Tiket" },
    { "data-sort": "sort-nama-lengkap", name: "Nama Lengkap" },
    { "data-sort": "sort-judul", name: "Judul Pengaduan" },
    { "data-sort": "sort-kategori", name: "Kategori" },
    { "data-sort": "sort-distribusi", name: "Distribusi" },
    { "data-sort": "sort-disposisi", name: "Disposisi" },
    { "data-sort": "sort-sumber", name: "Sumber" },
    { "data-sort": "sort-status", name: "Status" },
    { "data-sort": "sort-dikirim", name: "Dikirim" },
  ],
};

const setPageListItems = (e) => {
  window.tabler_list["advanced-table-laporan"].page = parseInt(e.target.dataset.value, 10);
  window.tabler_list["advanced-table-laporan"].update();
  document.querySelector("#page-count").innerHTML = e.target.dataset.value;
};

window.tabler_list = window.tabler_list || {};

// helper: update state tombol prev/next
function updateChevronState(list) {
  const pageSize = list.page || 1;
  const total = list.matchingItems.length || 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.floor(list.i / pageSize) + 1;

  const prevLi = document.querySelector("#pagination-prev .page-item");
  const nextLi = document.querySelector("#pagination-next .page-item");

  if (prevLi) prevLi.classList.toggle("disabled", currentPage <= 1);
  if (nextLi) nextLi.classList.toggle("disabled", currentPage >= totalPages);
}

/* =======================
   DUMMY DATA: dummyTickets (10)
   ======================= */
const dummyTickets = [
  {
    no: 1,
    tiket: "1974732",
    nama: "Melania Meirelda Tamara",
    judul: "Bantuan infrastruktur Jalan Desa",
    kategori: "Pekerjaan Umum dan Penataan",
    distribusi: "deputi_1",
    disposisi: "Belum terdisposisi",
    sumber: "TM",
    status: "Proses verifikasi dan telaah",
    dikirim: "02/11/2025",
  },
  {
    no: 2,
    tiket: "1974733",
    nama: "Marlion Sh",
    judul: "Permohonan Kepastian Politik dan Hukum Operasional",
    kategori: "Politik dan Hukum",
    distribusi: "deputi_3",
    disposisi: "Belum terdisposisi",
    sumber: "TM",
    status: "Proses verifikasi dan telaah",
    dikirim: "02/11/2025",
  },
  {
    no: 3,
    tiket: "1974736",
    nama: "Maria N Sampouw",
    judul: "Permohonan Agar Masuk DTKS",
    kategori: "Sosial dan Kesejahteraan",
    distribusi: "deputi_2",
    disposisi: "Belum terdisposisi",
    sumber: "Web",
    status: "Proses verifikasi dan telaah",
    dikirim: "01/11/2025",
  },
  {
    no: 4,
    tiket: "1974738",
    nama: "Lie Mei Lin",
    judul: "Kasus Penipuan",
    kategori: "Politik dan Hukum",
    distribusi: "deputi_3",
    disposisi: "Belum terdisposisi",
    sumber: "Email",
    status: "Proses verifikasi dan telaah",
    dikirim: "01/11/2025",
  },
  {
    no: 5,
    tiket: "1974739",
    nama: "Muhammad Solihin",
    judul: "Pembayaran Ganti Rugi Tanah",
    kategori: "Pertanahan",
    distribusi: "deputi_3",
    disposisi: "Belum terdisposisi",
    sumber: "TM",
    status: "Proses verifikasi dan telaah",
    dikirim: "31/08/2025",
  },
  {
    no: 6,
    tiket: "1974740",
    nama: "Dewi Anggraini",
    judul: "Bantuan Bedah Rumah",
    kategori: "Sosial dan Kesejahteraan",
    distribusi: "deputi_2",
    disposisi: "Sudah terdisposisi",
    sumber: "Web",
    status: "Selesai",
    dikirim: "28/08/2025",
  },
  {
    no: 7,
    tiket: "1974741",
    nama: "Agus Saputra",
    judul: "Perbaikan Drainase RW 05",
    kategori: "Pekerjaan Umum dan Penataan",
    distribusi: "deputi_1",
    disposisi: "Sudah terdisposisi",
    sumber: "TM",
    status: "Selesai",
    dikirim: "27/08/2025",
  },
  {
    no: 8,
    tiket: "1974742",
    nama: "Siti Pratiwi",
    judul: "Keberatan Proses Perizinan",
    kategori: "Politik dan Hukum",
    distribusi: "deputi_3",
    disposisi: "Belum terdisposisi",
    sumber: "Email",
    status: "Ditolak",
    dikirim: "25/08/2025",
  },
  {
    no: 9,
    tiket: "1974743",
    nama: "Rina Kusuma",
    judul: "Bantuan Penerangan Jalan Umum",
    kategori: "Pekerjaan Umum dan Penataan",
    distribusi: "deputi_1",
    disposisi: "Sudah terdisposisi",
    sumber: "Web",
    status: "Selesai",
    dikirim: "22/08/2025",
  },
  {
    no: 10,
    tiket: "1974744",
    nama: "Andi Nugroho",
    judul: "Perselisihan Batas Tanah",
    kategori: "Pertanahan",
    distribusi: "deputi_3",
    disposisi: "Belum terdisposisi",
    sumber: "TM",
    status: "Proses verifikasi dan telaah",
    dikirim: "20/08/2025",
  },
];

/* =======================
   RENDER <tr> UNTUK dummyTickets
   ======================= */
function renderTicketRows(rows) {
  const tbody = document.querySelector("#advanced-table-laporan .table-tbody");
  if (!tbody) return;
  tbody.innerHTML = rows
    .map(
      (r) => `
    <tr>
      <td class="sort-nomor">${r.no}</td>
      <td class="sort-nomor-tiket"><a href="#" class="text-blue">${r.tiket}</a></td>
      <td class="sort-nama-lengkap">${r.nama}</td>
      <td class="sort-judul">${r.judul}</td>
      <td class="sort-kategori">${r.kategori}</td>
      <td class="sort-distribusi">${r.distribusi}</td>
      <td class="sort-disposisi ${/Belum/.test(r.disposisi) ? "text-danger" : "text-success"}">${r.disposisi}</td>
      <td class="sort-sumber"><span class="badge bg-primary-lt">${r.sumber}</span></td>
      <td class="sort-status">${r.status}</td>
      <td class="sort-dikirim">${r.dikirim}</td>
      <td>
        <div class="btn-list flex-nowrap">
            <button class="btn btn-icon btn-outline-secondary"><i class="ti ti-eye"></i></button>
            <button class="btn btn-icon btn-outline-secondary"><i class="ti ti-pencil"></i></button>
            <button class="btn btn-icon btn-outline-danger btn-delete"
                data-bs-toggle="modal"
                data-bs-target="#modal-confirm-delete"
                data-ticket="${r.tiket}"
                title="Hapus">
                <i class="ti ti-trash"></i>
            </button>
        </div>
      </td>
    </tr>
  `
    )
    .join("");
}

/* =======================
   EMPTY STATE (punyamu)
   ======================= */
function ensureEmptyRow() {
  const tbody =
    document.querySelector("#advanced-table-laporan .table-tbody") || document.querySelector(".table-tbody");
  let emptyRow = tbody.querySelector("tr.empty-row");
  if (!emptyRow) {
    const colCount =
      document.querySelector("#advanced-table-laporan thead tr")?.children.length || advancedTable.headers.length || 1;

    emptyRow = document.createElement("tr");
    emptyRow.className = "empty-row";
    const td = document.createElement("td");
    td.colSpan = colCount;
    td.className = "text-center text-muted p-4";
    td.innerHTML = `
      <div class="d-flex flex-column align-items-center gap-1">
        <div style="font-size: 2rem; line-height: 1;">😕</div>
        <div><strong>Tidak ada data</strong></div>
        <div class="small">Coba ubah filter atau kata kunci pencarian.</div>
      </div>`;
    emptyRow.appendChild(td);
    tbody.appendChild(emptyRow);
  }
  return emptyRow;
}
function toggleEmptyRow(list) {
  const emptyRow = ensureEmptyRow();
  const hasNoItems = list.matchingItems.length === 0;
  emptyRow.style.display = hasNoItems ? "" : "none";

  const paginationEl =
    document.querySelector("#advanced-table-pagination") ||
    document.querySelector("#advanced-table-laporan .pagination") ||
    document.querySelector(".pagination");
  if (paginationEl) paginationEl.style.visibility = hasNoItems ? "hidden" : "visible";
}

/* =======================
   UTIL TANGGAL & SORT
   ======================= */
function parseDMY(s) {
  if (!s) return NaN;
  const [d, m, y] = s.split(/[\/\-]/).map(Number);
  return new Date(y, (m || 1) - 1, d || 1).getTime();
}

/* =======================
   POPULATE & LOGIC FILTER (modal)
   ======================= */
// Isi opsi filter dari data
function populateFilterOptionsFromData(rows) {
  const katSel = document.getElementById("filter-kategori");
  const statSel = document.getElementById("filter-status");
  const distSel = document.getElementById("filter-distribusi");
  const dispSel = document.getElementById("filter-disposisi");
  const sumSel = document.getElementById("filter-sumber");
  const fill = (sel, items, firstLabel) => {
    if (!sel) return;
    const opts = [...new Set(items)].sort();
    sel.innerHTML =
      `<option value="">${firstLabel}</option>` + opts.map((v) => `<option value="${v}">${v}</option>`).join("");
  };
  fill(
    katSel,
    rows.map((x) => x.kategori),
    "Semua Kategori"
  );
  fill(
    statSel,
    rows.map((x) => x.status),
    "Semua Status"
  );
  fill(
    distSel,
    rows.map((x) => x.distribusi),
    "Semua Distribusi"
  );
  fill(
    dispSel,
    rows.map((x) => x.disposisi),
    "Semua Disposisi"
  );
  fill(
    sumSel,
    rows.map((x) => x.sumber),
    "Semua Sumber"
  );
}

// Terapkan filter dari modal
function applyFilters(list) {
  const kategori = (document.getElementById("filter-kategori")?.value || "").trim();
  const status = (document.getElementById("filter-status")?.value || "").trim();
  const distribusi = (document.getElementById("filter-distribusi")?.value || "").trim();
  const disposisi = (document.getElementById("filter-disposisi")?.value || "").trim();
  const sumber = (document.getElementById("filter-sumber")?.value || "").trim();
  const rangeVal = (document.getElementById("filter-date-range")?.value || "").trim();
  const sortBy = document.getElementById("filter-sort")?.value || "terbaru";

  let fromTs = -Infinity,
    toTs = Infinity;
  if (rangeVal && rangeVal.includes(" - ")) {
    const [from, to] = rangeVal.split(" - ");
    fromTs = parseDMY(from);
    toTs = parseDMY(to);
  }

  list.filter((item) => {
    const v = item.values();
    if (kategori && v["sort-kategori"] !== kategori) return false;
    if (status && v["sort-status"] !== status) return false;
    if (distribusi && v["sort-distribusi"] !== distribusi) return false;
    if (disposisi && v["sort-disposisi"] !== disposisi) return false;
    if (sumber && v["sort-sumber"] !== sumber) return false;

    const t = parseDMY(v["sort-dikirim"]);
    if (!isNaN(fromTs) && t < fromTs) return false;
    if (!isNaN(toTs) && t > toTs) return false;

    return true;
  });

  // sort by tanggal
  const dir = sortBy === "terbaru" ? -1 : 1;
  list.sort("sort-dikirim", {
    sortFunction: (a, b) => dir * (parseDMY(a.values()["sort-dikirim"]) - parseDMY(b.values()["sort-dikirim"])),
  });

  toggleEmptyRow(list);
  updateChevronState(list);
}

function resetFilters(list) {
  [
    "filter-kategori",
    "filter-status",
    "filter-distribusi",
    "filter-disposisi",
    "filter-sumber",
    "filter-date-range",
    "filter-sort",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = id === "filter-sort" ? "terbaru" : "";
  });

  list.filter(); // clear
  list.sort("sort-nomor", {
    sortFunction: (a, b) => parseInt(a.values()["sort-nomor"]) - parseInt(b.values()["sort-nomor"]),
  });
  toggleEmptyRow(list);
  updateChevronState(list);
  updateFilterBadge();
}

function getActiveFilterCount() {
  // ambil nilai filter (kecuali 'Urutkan')
  const kategori = (document.getElementById("filter-kategori")?.value || "").trim();
  const status = (document.getElementById("filter-status")?.value || "").trim();
  const distribusi = (document.getElementById("filter-distribusi")?.value || "").trim();
  const disposisi = (document.getElementById("filter-disposisi")?.value || "").trim();
  const sumber = (document.getElementById("filter-sumber")?.value || "").trim();
  const rangeVal = (document.getElementById("filter-date-range")?.value || "").trim();

  let count = 0;
  if (kategori) count++;
  if (status) count++;
  if (distribusi) count++;
  if (disposisi) count++;
  if (sumber) count++;

  // hitung date range kalau keduanya diisi (format "DD/MM/YYYY - DD/MM/YYYY")
  if (rangeVal && rangeVal.includes(" - ")) {
    const [from, to] = rangeVal.split(" - ");
    if (from.trim() && to.trim()) count++;
  }

  console.log(count);
  return count;
}

function updateFilterBadge() {
  const n = getActiveFilterCount();
  const badge = document.getElementById("filter-active-count");
  if (!badge) return;
  if (n > 0) {
    badge.textContent = n;
    badge.classList.remove("d-none");
  } else {
    badge.classList.add("d-none");
  }

  console.log(n);
}

/* =======================
   INIT
   ======================= */
// -- isi modal saat tombol hapus diklik --
document.getElementById("advanced-table-laporan")?.addEventListener("click", (e) => {
  const btn = e.target.closest('.btn-delete[data-bs-target="#modal-confirm-delete"]');
  if (!btn) return;

  const tiket = btn.dataset.ticket;
  const tr = btn.closest("tr");
  const nama = tr?.querySelector(".sort-nama-lengkap")?.textContent?.trim() || "";

  // set konten modal
  const modal = document.getElementById("modal-confirm-delete");
  modal.querySelector("#confirm-ticket").textContent = tiket || "—";
  modal.querySelector("#confirm-name").textContent = nama ? `atas nama ${nama}` : "";

  // simpan tiket yg akan dihapus ke tombol confirm
  modal.querySelector("#btn-confirm-delete").dataset.ticket = tiket || "";
});

// -- eksekusi hapus saat "Ya, hapus" ditekan --
document.getElementById("btn-confirm-delete")?.addEventListener("click", () => {
  const tiket = document.getElementById("btn-confirm-delete").dataset.ticket;
  const list = window.tabler_list?.["advanced-table-laporan"];

  if (tiket && list) {
    const removed = list.remove("sort-nomor-tiket", tiket);
    if (!removed || removed.length === 0) {
      // fallback kalau valueName beda
      document.querySelector(`.btn-delete[data-ticket="${tiket}"]`)?.closest("tr")?.remove();
      list.reIndex();
    }
    list.update();
    toggleEmptyRow(list);
    updateChevronState(list);
  }

  // Fallback close modal jika tidak ada Bootstrap/shim
  const m = document.getElementById("modal-confirm-delete");
  if (m && m.classList.contains("show") && !(window.bootstrap && window.bootstrap.Modal)) {
    // pindahkan fokus ke tombol Filter agar tidak ada aria-hidden warning
    const opener = document.getElementById("btn-open-filter") || document.body;
    if (opener && opener.focus) opener.focus({ preventScroll: true });

    m.classList.remove("show");
    m.setAttribute("aria-hidden", "true");
    m.style.display = "none";
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // 1) render data tickets
  renderTicketRows(dummyTickets);
  populateFilterOptionsFromData(dummyTickets);

  // 2) init List.js
  const list = (window.tabler_list["advanced-table-laporan"] = new List("advanced-table-laporan", {
    sortClass: "table-sort",
    listClass: "table-tbody",
    page: 20,
    pagination: {
      paginationClass: "pagination-numbers", // UL angka khusus
      item: (value) => `<li class="page-item"><a class="page-link cursor-pointer">${value.page}</a></li>`,
      innerWindow: 1,
      outerWindow: 1,
      left: 1,
      right: 0,
    },
    valueNames: advancedTable.headers.map((h) => h["data-sort"]),
  }));

  // 3) prev/next (UL terpisah)
  const prevA = document.querySelector("#pagination-prev a.page-link");
  const nextA = document.querySelector("#pagination-next a.page-link");
  if (prevA) {
    prevA.addEventListener("click", (e) => {
      e.preventDefault();
      const pageSize = list.page || 1;
      if (list.i <= 0) return;
      list.i = Math.max(0, list.i - pageSize);
      list.update();
    });
  }
  if (nextA) {
    nextA.addEventListener("click", (e) => {
      e.preventDefault();
      const pageSize = list.page || 1;
      const total = list.matchingItems.length || 0;
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      const currentPage = Math.floor(list.i / pageSize) + 1;
      if (currentPage >= totalPages) return;
      list.i = Math.min((totalPages - 1) * pageSize, list.i + pageSize);
      list.update();
    });
  }

  // 4) search
  const searchInput = document.querySelector("#advanced-table-laporan-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      list.search(searchInput.value);
      toggleEmptyRow(list);
      updateChevronState(list);
      updateFilterBadge();
    });
  }

  // 5) empty state & chevrons sinkron
  list.on("updated", () => {
    toggleEmptyRow(list);
    updateChevronState(list);
  });
  toggleEmptyRow(list);
  updateChevronState(list);

  // 6) Litepicker untuk date range (opsional)
  if (window.Litepicker) {
    new Litepicker({
      element: document.getElementById("filter-date-range"),
      singleMode: false,
      format: "DD/MM/YYYY",
    });
  }

  // 7) tombol Apply / Reset filter
  document.getElementById("btn-filter-apply")?.addEventListener("click", () => {
    applyFilters(list);
    updateFilterBadge(); // <-- update badge dulu

    // close modal aman (tanpa Bootstrap)
    const modalEl = document.getElementById("modal-filter-laporan");
    const opener = document.getElementById("btn-open-filter");
  });

  document.getElementById("btn-filter-reset")?.addEventListener("click", () => {
    resetFilters(list);
    updateFilterBadge(); // badge kembali hidden
  });

  // 8) helper reload data nanti
  window.reloadTicketRows = function (rows) {
    renderTicketRows(rows);
    populateFilterOptionsFromData(rows);
    list.reIndex();
    list.update();
  };

  updateFilterBadge();
});

/* =======================
   (Opsional) nomor urut mengikuti halaman
   ======================= */
function renumberVisibleRows(list) {
  const tbody = document.querySelector("#advanced-table-laporan .table-tbody");
  if (!tbody) return;
  const rows = Array.from(tbody.querySelectorAll("tr:not(.empty-row)"));
  rows.forEach((tr, idx) => {
    const cell = tr.querySelector(".sort-nomor");
    if (cell) cell.textContent = idx + 1 + list.i;
  });
}
