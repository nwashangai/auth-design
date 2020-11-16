interface Locale {
  [key: string]: any;
}

interface Initial {
  [key: string]: any;
}

export const initialState: Initial = {
  theme: localStorage.getItem('theme') || 'light',
  toggleSelect: false,
  language: localStorage.getItem('locale') || 'english',
  isLoading: false,
  error: ''
};

export const locale: Locale = {
  english: {
    application: 'Application',
    signIn: 'Sign In',
    recorver: 'Recover',
    register: 'Register',
    forgot: 'Forgot Password?',
    createAccount: 'Create an account',
    help: 'Help',
    privacy: 'Privacy',
    terms: 'Terms',
    email: 'Email',
    name: 'Name',
    phone: 'Phone',
    password: 'Password',
    confirmPass: 'Confirm Password',
    emailPhone: 'Email or Phone',
    selectLanguage: 'Select Language',
    error1: '(Email or Phone) and Password must be provided',
    error2: 'All fields must be provided',
    error3: 'Email must be provided'
  },
  korean: {
    application: '신청',
    signIn: '로그인',
    recorver: '다시 덮다',
    register: '레지스터',
    forgot: '비밀번호를 잊으 셨나요?',
    createAccount: '계정 생성',
    help: '도움',
    privacy: '은둔',
    terms: '자귀',
    email: '이메일',
    name: '이름',
    phone: '전화',
    password: '암호',
    confirmPass: '비밀번호 확인',
    emailPhone: '이메일이나 전화',
    selectLanguage: '언어 선택',
    error1: '(이메일 또는 전화 번호) 및 비밀번호를 입력해야합니다.',
    error2: '모든 필드를 제공해야합니다.',
    error3: '이메일을 제공해야합니다.'
  },
  chinese: {
    application: '應用',
    signIn: '登入',
    recorver: '恢復',
    register: '寄存器',
    forgot: '忘記密碼？',
    createAccount: '創建一個帳戶',
    help: '救命',
    privacy: '隱私',
    terms: '條款',
    email: '電子郵件',
    name: '名稱',
    phone: '電話',
    password: '密碼',
    confirmPass: '確認密碼',
    emailPhone: '郵件或者電話',
    selectLanguage: '選擇語言',
    error1: '（電子郵件或電話）和密碼必須提供',
    error2: '必須提供所有字段',
    error3: '必須提供電子郵件'
  },
  español: {
    application: 'Solicitud',
    signIn: 'Registrarse',
    recorver: 'Recuperar',
    register: 'Registrarse',
    forgot: '¿Se te olvidó tu contraseña?',
    createAccount: 'Crea una cuenta',
    help: 'Ayuda',
    privacy: 'Intimidad',
    terms: 'Condiciones',
    email: 'Correo electrónico',
    name: 'Nombre',
    phone: 'Teléfono',
    password: 'Contraseña',
    confirmPass: 'Confirmar contraseña',
    emailPhone: 'Email o teléfono',
    selectLanguage: 'Seleccione el idioma',
    error1: '(Correo electrónico o teléfono) y contraseña',
    error2: 'Se deben proporcionar todos los campos',
    error3: 'Debe proporcionarse un correo electrónico'
  }
};
