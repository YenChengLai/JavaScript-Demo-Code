window.onload = () => {
    const numbers = document.querySelectorAll('.number');
    const result = document.getElementById('result');

    document.getElementById('AC').onclick = () => {
        result.innerHTML = '0';
    }

    document.getElementById('negative').onclick = () => {
        let value = result.innerHTML;
        if (value.startsWith('-')) {
            result.innerHTML = value.substr(1, value.length);
        } else {
            result.innerHTML = '-' + value;
        }
    }

    document.getElementById('percent').onclick = () => {
        result.innerHTML = Number(result.innerHTML) / 100;
    }

    document.getElementById('point').onclick = () => {
        result.innerHTML += '.';
    }

    numbers.forEach(number => {
        let _self = number;
        _self.onclick = () => {
            if (!Number(result.innerHTML) && result.innerHTML.charAt('.') > 0) {
                result.innerHTML = _self.id;
            } else {
                result.innerHTML += _self.id;
            }
        }
    });
}