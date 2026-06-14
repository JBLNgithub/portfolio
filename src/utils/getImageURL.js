function getImageURL(name, project) {
    return new URL(`../assets/images/${project}/${name}`, import.meta.url).href
}

export default getImageURL;