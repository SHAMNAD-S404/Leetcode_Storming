function getEncryptedString(s: string, k: number): string {

 let res = '';
    for (let i = 0; i < s.length; i++) {
        let newIndex = (i + k) % s.length;
        res += s[newIndex];
    }
    return res;
    
};