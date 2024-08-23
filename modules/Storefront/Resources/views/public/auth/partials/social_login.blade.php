@if (count($providers) !== 0)
    <span class="sign-in-with">
        @if (request()->routeIs('login'))
            {{ trans('user::auth.or_continue_with') }}
        @else
            {{ trans('user::auth.or_sign_up_with') }}
        @endif
    </span>

    <ul class="list-inline social-login">
        @if (setting('facebook_login_enabled'))
            <li>
                <a href="{{ route('login.redirect', ['provider' => 'facebook']) }}" title="{{ trans('user::auth.facebook') }}">
                    <img src="{{ asset('build/assets/facebook.png') }}" alt="Facebook icon">
                </a>
            </li>
        @endif

        @if (setting('google_login_enabled'))
            <li>
                <a href="{{ route('login.redirect', ['provider' => 'google']) }}" title="{{ trans('user::auth.google') }}">
                    <img src="{{ asset('build/assets/google.png') }}" alt="Google icon">
                </a>
            </li>
        @endif
    </ul>
@endif
