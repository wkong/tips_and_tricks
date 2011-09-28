var total = 0;

for (var i = 0; i < 20; i++) {
    if (i % 2) {
        continue;
    }
    
    total = total + i;
}

alert(total);