
// Quran Data
const quran = [
  {
    surah: "سورۃ الفاتحہ",
    ayat: [
      {
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        urdu: "سب تعریف اللہ ہی کے لیے ہے جو تمام جہانوں کا پروردگار ہے۔"
      },
      {
        arabic: "الرَّحْمَنِ الرَّحِيمِ",
        urdu: "نہایت مہربان، بہت رحم فرمانے والا ہے۔"
      },
      {
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        urdu: "روزِ جزا کا مالک ہے۔"
      },
      {
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        urdu: "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں۔"
      },
      {
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        urdu: "ہمیں سیدھا راستہ دکھا۔"
      },
      {
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        urdu: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا۔"
      },
      {
        arabic: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        urdu: "نہ ان لوگوں کا جن پر غضب کیا گیا اور نہ گمراہوں کا۔"
      }
    ]
  }
];

// Quran ko HTML mein dikhana
function showQuran() {
  const container = document.getElementById("quran");

  container.innerHTML = "";

  quran.forEach(surah => {

    const title = document.createElement("h2");
    title.textContent = surah.surah;
    container.appendChild(title);

    surah.ayat.forEach((ayah, index) => {

      const div = document.createElement("div");
      div.className = "ayah";

      div.innerHTML = `
        <div class="arabic">
          ${ayah.arabic} ﴿${index + 1}﴾
        </div>

        <div class="urdu">
          ${ayah.urdu}
        </div>
      `;

      container.appendChild(div);
    });
  });
}

// Page load hone par Quran show kare
document.addEventListener("DOMContentLoaded", showQuran);
