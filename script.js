// جلب جميع عناصر الاختيارات
const options = document.querySelectorAll('.option');

// مراقبة الضغط على كل اختيار
options.forEach(option => {
    option.addEventListener('click', () => {

        // إزالة الاختيار القديم من بقية العناصر
        options.forEach(opt => opt.classList.remove('selected'));

        // إضافة الكلاس الأخضر للعنصر المضغوط حالياً
        option.classList.add('selected');

    });
});