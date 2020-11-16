// react libraries
import * as React from 'react';
import Icon from '@mdi/react';
import { mdiBrightness7, mdiChevronUp } from '@mdi/js';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

// Components
import Spinner from 'components/Spinner';

// utilities
import validate from 'utilities/validation';

// Initaial state
import { initialState, locale } from './fixtures';

// Styles
import './pages.scss';
import { error } from 'console';

export default () => {
  const [state, setState] = React.useState(initialState);
  const [form, setForm] = React.useState({
    login: '',
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const setFormValue = (event: any) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  const toggleSelect = () =>
    setState({
      ...state,
      toggleSelect: !state.toggleSelect
    });

  const toggleTheme = () => {
    localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light');
    setState({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light'
    });
  };

  const changeLocale = (language: string) => {
    localStorage.setItem('locale', language);
    setState({
      ...state,
      language,
      toggleSelect: !state.toggleSelect
    });
  };

  const submitData = () => {
    let validation;
    switch (window.location.pathname) {
      case '/':
        validation = validate('/', form);
        if (!validation.success) {
          setState({
            ...state,
            error: locale[state.language]['error1']
          });
          return;
        }
        break;

      case '/register':
        validation = validate('/register', form);
        if (!validation.success) {
          setState({
            ...state,
            error: locale[state.language]['error2']
          });
          return;
        }
        break;

      default:
        validation = validate('/forgot', form);
        if (!validation.success) {
          setState({
            ...state,
            error: locale[state.language]['error3']
          });
          return;
        }
        break;
    }
    setState({
      ...state,
      isLoading: true,
      error: ''
    });
    setTimeout(
      () =>
        setState({
          ...state,
          isLoading: false,
          error: ''
        }),
      3000
    );
  };

  return (
    <div className={`container ${state.theme}-theme`}>
      <div className="container__wrapper">
        <div className="container__main">
          <p>
            <Logo className="logo" />
          </p>
          <p>
            <span>
              {window.location.pathname === '/register'
                ? locale[state.language]['register']
                : window.location.pathname === '/forgot'
                ? `${locale[state.language]['recorver']} ${
                    locale[state.language]['password']
                  }`
                : locale[state.language]['signIn']}
            </span>
          </p>
          {window.location.pathname === '/' && (
            <p>
              <input
                type="text"
                placeholder={`${locale[state.language]['emailPhone']} *`}
                value={form.login}
                name="login"
                className="text-input"
                onChange={setFormValue}
              />
            </p>
          )}
          {(window.location.pathname === '/register' ||
            window.location.pathname === '/forgot') && (
            <p>
              <input
                type="text"
                placeholder={`${locale[state.language]['email']} *`}
                value={form.email}
                name="email"
                className="text-input"
                onChange={setFormValue}
              />
            </p>
          )}
          {window.location.pathname === '/register' && (
            <>
              <p>
                <input
                  type="text"
                  placeholder={`${locale[state.language]['name']} *`}
                  value={form.name}
                  name="name"
                  className="text-input"
                  onChange={setFormValue}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder={`${locale[state.language]['phone']} *`}
                  value={form.phone}
                  name="phone"
                  className="text-input"
                  onChange={setFormValue}
                />
              </p>
            </>
          )}
          {(window.location.pathname === '/' ||
            window.location.pathname === '/register') && (
            <p>
              <input
                type="password"
                placeholder={`${locale[state.language]['password']} *`}
                value={form.password}
                name="password"
                className="text-input"
                onChange={setFormValue}
              />
            </p>
          )}

          {window.location.pathname === '/register' && (
            <input
              type="password"
              placeholder={`${locale[state.language]['confirmPass']} *`}
              value={form.confirmPassword}
              name="confirmPassword"
              className="text-input"
              onChange={setFormValue}
            />
          )}
          {state.error && (
            <p>
              <span className="error-message">{state.error}</span>
            </p>
          )}
          <p className="control">
            <a
              href={window.location.pathname === '/' ? '/forgot' : '/'}
              className="forgot"
            >
              {window.location.pathname === '/'
                ? locale[state.language]['forgot']
                : locale[state.language]['signIn']}
            </a>

            <button
              className="auth-btn"
              disabled={state.isLoading}
              onClick={submitData}
            >
              {state.isLoading ? (
                <Spinner />
              ) : (
                <>
                  {window.location.pathname === '/register'
                    ? locale[state.language]['register']
                    : window.location.pathname === '/forgot'
                    ? locale[state.language]['recorver']
                    : locale[state.language]['signIn']}
                </>
              )}
            </button>
          </p>
          <p>
            {window.location.pathname !== '/register' && (
              <a href="/register" className="forgot">
                {locale[state.language]['createAccount']}
              </a>
            )}
          </p>
        </div>
        <div className="container__footer">
          <div className="container__settings">
            <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              <Icon
                path={mdiBrightness7}
                title="theme"
                size={1}
                horizontal
                vertical
                rotate={90}
                // color="red"
                spin
              />
            </div>
            <div className="dropdown">
              <div onClick={toggleSelect}>
                <span>{locale[state.language]['selectLanguage']}</span>{' '}
                <Icon
                  className="dropdown__chevron"
                  path={mdiChevronUp}
                  title="chevron"
                  size={0.7}
                  horizontal
                  vertical
                />
              </div>
              <ul className={state.toggleSelect ? 'show' : 'hide'}>
                <li onClick={() => changeLocale('english')}>English</li>
                <li onClick={() => changeLocale('korean')}>Korean</li>
                <li onClick={() => changeLocale('chinese')}>Chinese</li>
                <li onClick={() => changeLocale('español')}>Español</li>
              </ul>
            </div>
          </div>
          <div className="container__tools">
            <span>{locale[state.language]['help']}</span>
            <span>{locale[state.language]['privacy']}</span>
            <span>{locale[state.language]['terms']}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
