import './controlledForm.scss';

function ControlledForm() {
  return (
    <div className="controlledForm-contaier">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </form>
    </div>
  );
}

export default ControlledForm;
