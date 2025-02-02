// import { type ErrorCodes } from '@/../common/const';
import { CommonErrorsEnum, EventValidatorErrorTypes } from '../../../../common/const';

export default {
	[EventValidatorErrorTypes.EVENT_IS_NOT_DEFINED]: 'Мероприятие не определено',
	[EventValidatorErrorTypes.TITLE_IS_NOT_DEFINED]: 'Заголовок не определен',
	[EventValidatorErrorTypes.TITLE_IS_TOO_SHORT]: 'Заголовок слишком короткий',
	[EventValidatorErrorTypes.TITLE_IS_TOO_LONG]: 'Заголовок слишком длинный',
	[EventValidatorErrorTypes.DESCRIPTION_IS_NOT_DEFINED]: 'Описание не определено',
	[EventValidatorErrorTypes.DESCRIPTION_IS_TOO_SHORT]: 'Описание слишком короткое',
	[EventValidatorErrorTypes.DESCRIPTION_IS_TOO_LONG]: 'Описание слишком длинное',
	[EventValidatorErrorTypes.START_DATE_IS_NOT_DEFINED]: 'Дата начала не определена',
	[EventValidatorErrorTypes.START_DATE_IS_IN_THE_PAST]: 'Дата начала в прошлом',
	[EventValidatorErrorTypes.DURATION_IS_NEGATIVE]: 'Длительность отрицательная',
	[EventValidatorErrorTypes.LOCATION_IS_NOT_DEFINED]: 'Место проведения не определено',
	[EventValidatorErrorTypes.COUNTRY_IS_NOT_DEFINED]: 'Страна не определена',
	[EventValidatorErrorTypes.CITY_IS_NOT_DEFINED]: 'Город не определен',
	[EventValidatorErrorTypes.IMAGE_LINK_IS_TOO_SHORT]: 'Ссылка на изображение слишком короткая',
	[EventValidatorErrorTypes.IMAGE_LINK_IS_TOO_LONG]: 'Ссылка на изображение слишком длинная',
	[EventValidatorErrorTypes.URL_IS_NOT_DEFINED]: 'Ссылка на мероприятие не определена',
	[EventValidatorErrorTypes.URL_IS_TOO_SHORT]: 'Ссылка на мероприятие слишком короткая',
	[EventValidatorErrorTypes.URL_IS_TOO_LONG]: 'Ссылка на мероприятие слишком длинная',
	[EventValidatorErrorTypes.TITLE_IS_NOT_CLEAN]: 'В заголовоке ненормативная лексика',
	[EventValidatorErrorTypes.DESCRIPTION_IS_NOT_CLEAN]: 'В описании ненормативная лексика',
	[CommonErrorsEnum.EVENT_NOT_FOUND]: 'Мероприятие не найдено',
	[CommonErrorsEnum.IMAGE_ADDITION_ERROR]: 'Ошибка при добавлении изображения',
	[CommonErrorsEnum.IMAGE_DELETION_ERROR]: 'Ошибка при удалении изображения',
	[CommonErrorsEnum.IMAGE_ENCODING_ERROR]: 'Ошибка формата изображения',
	[CommonErrorsEnum.IMAGE_TOO_LARGE]: 'Файл изображения слишком большой',
	[CommonErrorsEnum.NO_IMAGE_TO_ADD]: 'Файл изображения не найден',
	[CommonErrorsEnum.NO_IMAGE_TO_DELETE]: 'Файл изображения не найден',
	[CommonErrorsEnum.PAYMENT_INFO_FILE_PARSE_ERROR]: 'Ошибка при ',
	[CommonErrorsEnum.PAYMENT_INFO_FILE_NOT_EXIST]: 'Метод оплаты не задан',
	[CommonErrorsEnum.PAYMENT_INFO_NOT_FOUND]: 'Метод оплаты не найден',
	[CommonErrorsEnum.UNKNOWN_IMAGE_ROUTE_ERROR]: 'Непредвиденная ошибка при обработке изображения',
	[CommonErrorsEnum.WRONG_TOKEN]: 'Ваш токен авторизации поврежден',
	[CommonErrorsEnum.FORBIDDEN]: 'Ошибка допуска',
	[CommonErrorsEnum.UNAUTHORIZED]: 'У вас нет доступа к данному ресурсу',
	[CommonErrorsEnum.EVENT_ALREADY_EXISTS]: 'Данное мероприятие	уже существует',
	[CommonErrorsEnum.EVENT_SENT_ON_MODERATION]: 'Мероприятие отправлено на модерацию',
	[CommonErrorsEnum.NO_PAYLOAD_PROVIDED]: 'Отправлен пустой запрос',
	[CommonErrorsEnum.TIMEZONE_CITY_NOT_FOUND]:
		'Не удалось найти часовой пояс по указанным параметрам',
	[CommonErrorsEnum.USER_DOES_NOT_EXIST]: 'Пользователь не найден',
	[CommonErrorsEnum.USER_ALREADY_EXIST]: 'Пользователь уже существует',
	[CommonErrorsEnum.PASSWORD_TOO_SHORT]: 'Пароль должен быть длиннее 4 символов',
	[CommonErrorsEnum.PASSWORD_TOO_LONG]: 'Пароль не должен превышать 24 символа',
	[CommonErrorsEnum.PASSWORD_MISMATCH]: 'Пароль не совпадает',
	[CommonErrorsEnum.INVALID_EMAIL]: 'Введите действительный адрес электронной почты',
	[CommonErrorsEnum.REQUIRED_FIELD]: 'Это поле обязательно',
	[CommonErrorsEnum.ERROR_DEFAULT_MESSAGE]: 'Ошибка',
	[CommonErrorsEnum.ERROR_PAGE_PAGE]: 'Страница',
	[CommonErrorsEnum.ERROR_PAGE_NOT_FOUND]: 'не найдена',
	[CommonErrorsEnum.ERROR_PAGE_GO_HOME]: 'Вернуться на Главную',
	[CommonErrorsEnum.ERROR_PAGE_SERVER_ERROR]: 'Неизвестная Ошибка Сервера',
	[CommonErrorsEnum.NOT_FOUND_BY_ID]: 'Мероприятие с ID {id} не найдено'
};
