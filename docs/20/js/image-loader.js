class ImageLoader { // Image→ImageBitmap→Canvas.getContext('2d').drawImage().getImageData()→ImageData
    static async getImage(src) { // src:画像URL
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = (e) => reject(e);
            img.src = src;
        });
    }
    static async getImageBitmap(src) { return createImageBitmap(await this.getImage(src)) }
    static async getImageData(src) {
        const imgBm = await this.getImageBitmap(src)
        const canvas = document.createElement('canvas')
        canvas.width = imgBm.width
        canvas.height = imgBm.height
        const ctx = canvas.getContext("2d")
        ctx.drawImage(imgBm, 0, 0)
        return ctx.getImageData(0, 0, imgBm.width, imgBm.height)
    }
}
