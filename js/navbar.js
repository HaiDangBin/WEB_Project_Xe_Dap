document.addEventListener('DOMContentLoaded', function () {
    const navPlaceholder = document.getElementById('nav-placeholder');

    if (navPlaceholder) {
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) throw new Error("Không tìm thấy file navbar.html");
                return response.text();
            })
            .then(data => {
                // 1. Chèn HTML vào trang
                navPlaceholder.innerHTML = data;

                // 2. TỰ ĐỘNG LÀM SÁNG MENU (ACTIVE LINK)
                const currentPath = window.location.pathname.split("/").pop() || 'index.html';
                const links = document.querySelectorAll('.nav-link');
                links.forEach(link => {
                    if (link.getAttribute('href') === currentPath) {
                        link.classList.add('active');
                    }
                });

                // 3. KHỞI TẠO LOGIC TÌM KIẾM (Quan trọng nhất)
                initSearchLogic();

                // 4. CẬP NHẬT GIỎ HÀNG (Nếu bạn đã viết hàm này trong main.js)
                if (typeof updateCartCount === 'function') {
                    updateCartCount();
                }
            })
            .catch(error => console.error('Lỗi nhúng Navbar:', error));
    }
});

// Tách logic tìm kiếm ra để code gọn gàng hơn
function initSearchLogic() {
    const searchInput = document.getElementById('main-search');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        if (query.length < 1) {
            searchResults.classList.add('d-none');
            return;
        }

        // Đảm bảo products đã được nạp từ data.js
        if (typeof products !== 'undefined') {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query)
            ).slice(0, 5);

            renderSearchResults(filtered, searchResults);
        }
    });

    function renderSearchResults(results, container) {
        if (results.length === 0) {
            container.innerHTML = '<div class="p-3 text-muted text-center bg-white border">Không tìm thấy sản phẩm</div>';
        } else {
            container.innerHTML = results.map(p => `
                <a href="product-detail.html?id=${p.id}" class="list-group-item list-group-item-action d-flex align-items-center">
                    <img src="${p.img}" alt="${p.name}" style="width: 40px; height: 40px; object-fit: contain; margin-right: 10px;">
                    <div>
                        <div class="fw-bold" style="font-size: 14px;">${p.name}</div>
                        <div class="text-danger" style="font-size: 12px;">${p.price.toLocaleString()} VNĐ</div>
                    </div>
                </a>
            `).join('');
        }
        container.classList.remove('d-none');
    }

    // Đóng kết quả khi bấm ra ngoài
    
}