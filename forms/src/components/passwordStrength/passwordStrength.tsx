import './passwordStrength.scss';

function handlePasswordStrength(password: string) {
  let strength = 0;

  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  switch (strength) {
    case 0:
      return '';
    case 1:
    case 2:
      return 'weak';
    case 3:
      return 'medium';
    case 4:
    case 5:
      return 'strong';
  }
}

function PasswordStrength({ password }: { password: string }) {
  const passwordStrength = handlePasswordStrength(password);

  return (
    <div className="password-strength-container">
      <div className="password-strength">
        <span
          className={`password-strength-item first-${passwordStrength}`}
        ></span>
        <span
          className={`password-strength-item second-${passwordStrength}`}
        ></span>
        <span
          className={`password-strength-item three-${passwordStrength}`}
        ></span>
      </div>
      {passwordStrength ? (
        <span className="password-strength-text">
          This Password {passwordStrength}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default PasswordStrength
