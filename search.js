const inputSearch = document.getElementById('input-search');
const allItem = document.querySelectorAll('.item'); 
 
function search() {
    // 입력된 검색어 가져오기
    const searchValue = inputSearch.value.toLowerCase();

    // 각 제품에 대해 검색어와 일치하는지 확인하여 필터링
    const allItem = document.querySelectorAll('.item'); 
    for (var i = 0; i < allItem.length; i++) {
        const itemName = allItem[i].getElementsByClassName("item-name")[0].innerText.toLowerCase();
        if (itemName.includes(searchValue)) {
            allItem[i].classList.remove('dpnone');// 보이기
        } else {
            allItem[i].classList.add('dpnone'); // 숨기기
        }
    }
}
