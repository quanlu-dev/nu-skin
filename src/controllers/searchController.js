export const handleSearch = (keyword, navigate) => {
  navigate('/detail', {
    state: keyword,
  })
}