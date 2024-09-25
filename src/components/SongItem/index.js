import './index.css'

const SongItem = props => {
  const {songDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songDetails
  const deleteItem = () => deleteSong(id)
  return (
    <li className="comt">
      <img src={imageUrl} alt="track" />
      <div className="onner">
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <p>{duration}</p>
      <button type="button" onClick={deleteItem} data-testid="delete">
        delete
      </button>
    </li>
  )
}
export default SongItem
