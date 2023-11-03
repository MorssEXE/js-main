const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error')
    }
    else if (p.textContent.includes('success')) {
        p.classList.add('success')
    }
})