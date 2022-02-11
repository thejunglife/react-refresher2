import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm () {
  return <Card>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title" >Meeup Title</label>
        <input type="text" required id="title" />
      </div>
      <div className={classes.control}>
        <label htmlFor="image" >Meeup Image</label>
        <input type="url" required id="image" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address" >Meeup Image</label>
        <input type="text" required id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="description" >Meeup Image</label>
        <textarea id="description" required rows="10"></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}

export default NewMeetupForm