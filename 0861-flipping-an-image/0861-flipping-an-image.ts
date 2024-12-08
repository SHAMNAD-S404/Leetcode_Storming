function flipAndInvertImage(image: number[][]): number[][] {
    
      return image.map(row =>
        row
            .reverse() // Flip the row horizontally
            .map(pixel => 1 - pixel)    // Invert each pixel
    );
};