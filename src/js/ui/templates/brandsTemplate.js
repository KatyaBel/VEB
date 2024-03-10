export const createBrandItemTemplate = function (brandItem) {
    return `
        <img src="${brandItem.src}" alt="${brandItem.alt}">
    `;
};
export const brandsTemplate = function(data) {
    const brandsItemsTemplate = data.map((brandItem) => createBrandItemTemplate(brandItem)).join('');
    return `
        ${brandsItemsTemplate}
    `;
}