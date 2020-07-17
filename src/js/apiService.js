const apiKey = '17488430-d244df9e1a1645d78232e5491';

export default {
  searchQuery: '',
  page: 1,
  async fetchImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    const res = await fetch(url);
    const { hits } = await res.json();
    this.incrementPage();
    return hits;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
