const faqResponses = {
  "ما هي ساعات العمل؟": "ساعات العمل من 9 صباحًا حتى 5 مساءً.",
  "كيف يمكنني التواصل مع الدعم؟": "يمكنك التواصل عبر البريد الإلكتروني: support@example.com",
  "ما هي طرق الدفع المتاحة؟": "نقبل الدفع عبر فيزا، ماستر كارد، وفودافون كاش.",
  "هل يوجد ضمان على المنتجات؟": "نعم، يوجد ضمان لمدة عام كامل على جميع المنتجات.",
  "أين موقعكم؟": "نحن متواجدون في القاهرة، شارع التحرير."
};

window.onload = () => {
  const chatBox = document.getElementById('chat-box');
  if (chatBox) {
    chatBox.innerHTML += `<div class="message bot">مرحبًا! اختر سؤالًا من الأسئلة الشائعة:</div>`;
    Object.keys(faqResponses).forEach(question => {
      chatBox.innerHTML += `<div class="message bot"><button onclick="handleOptionClick('${question}')">${question}</button></div>`;
    });
  }
};

function handleOptionClick(question) {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="message user">${question}</div>`;
  const botReply = faqResponses[question];
  setTimeout(() => {
    chatBox.innerHTML += `<div class="message bot">${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMessage = input.value.trim();

  if (userMessage === '') return;

  chatBox.innerHTML += `<div class="message user">${userMessage}</div>`;
  const botReply = faqResponses[userMessage] || "عذرًا، لا أملك إجابة لهذا السؤال حاليًا.";
  setTimeout(() => {
    chatBox.innerHTML += `<div class="message bot">${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = '';
}

function toggleChat() {
  const container = document.getElementById('chat-container');
  const toggle = document.getElementById('chat-toggle');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    toggle.style.display = 'none';
  } else {
    container.classList.add('hidden');
    toggle.style.display = 'flex';
  }
}
