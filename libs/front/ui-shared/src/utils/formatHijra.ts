enum HijraEnum {
  yes = 'yes',
  no = 'no',
  maybe = 'maybe',
}

export function formatHijra(item: HijraEnum | ''): string {
  switch (item) {
    case 'yes':
      return 'oui';
    case 'no':
      return 'non';
    case 'maybe':
      return 'en reflexion';
    default:
      return 'no';
  }
}
