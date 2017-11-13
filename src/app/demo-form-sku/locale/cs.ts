import {IPartialLocaleValues, ILocaleValues} from 'ng2-semantic-ui';
/**
 * locale : Čeština (cs)
 * author : Ciara Ward : https://github.com/ciaraward
 */
// declare const cs: IPartialLocaleValues;


const cs: IPartialLocaleValues = {
    datepicker: {
        months: [
            'leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'
        ],
        monthsShort: [
            'Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čev', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'
        ],
        weekdays: [
            'neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'
        ],
        weekdaysShort: [
            'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'
        ],
        weekdaysNarrow: [
            'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'
        ],
        formats: {
            time: 'HH:mm',
            datetime: 'D. MMMM YYYY HH:mm',
            date: 'D. MMMM YYYY',
            month: 'MMMM YYYY',
            year: 'YYYY'
        },
        firstDayOfWeek: 1
    },
    search: {
        placeholder: 'Vyhledat...',
        noResults: {
            header: 'Nenalzezeny výsledky',
            message: 'Pro Vaše klíčová slova nebyly nalezeny žádné výsledky.'
        }
    },
    select: {
        noResultsMessage: 'Žádné výsledky',
        single: {
            placeholder: 'Zvolte'
        },
        multi: {
            placeholder: 'Zvolte ...',
            maxSelectedMessage: 'Maximální počet je #{max}',
            selectedMessage: '#{count} vybraných'
        }
    }
}

export default cs;
