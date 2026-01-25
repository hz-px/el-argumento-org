document.addEventListener('DOMContentLoaded', () => {
            const listItems = document.querySelectorAll('li[data-pdf-url]');

            listItems.forEach(item => {
                item.addEventListener('click', () => {
                    const pdfUrl = item.getAttribute('data-pdf-url');
                    if (pdfUrl) {
                        const link = document.createElement('a');
                        link.href = pdfUrl;
                        link.download = pdfUrl.split('/').pop();
                        link.click();
                    }
                });
            });
        });