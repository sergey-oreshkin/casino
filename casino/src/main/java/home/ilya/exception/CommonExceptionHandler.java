package home.ilya.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CommonExceptionHandler {
    private static final String AUTH_EXCEPTION_MESSAGE = "invalid login or password";

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<String> handleConflictException(ConflictException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<String> handleAuthException(AuthException e) {
        return new ResponseEntity<>(AUTH_EXCEPTION_MESSAGE, HttpStatus.UNAUTHORIZED);
    }

}
