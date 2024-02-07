function EventTable() {
  return (
    <table className="text-sm text-left border-collapse border border-gray-200 mt-5 mx-auto lg:text-lg">
      <thead>
        <tr>
          <th className="px-2 py-2 bg-gray-300 border-b dark:bg-gray-800 font-heading font-bold lg:px-8">
            Event/Holiday
          </th>
          <th className="px-2 py-2 bg-gray-300 border-b dark:bg-gray-800 font-heading font-bold lg:px-8">
            Date in 2024
          </th>
          <th className="px-2 py-2 bg-gray-300 border-b dark:bg-gray-800 font-heading font-bold lg:px-8">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Maghi - Lohri
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Jan 13, 2024 (Saturday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Commemorates the martyrdom of the Forty Immortals who fought
            valiantly for Guru Gobind Singh Ji.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Guru Gobind Singh Birthday
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Jan 17, 2024 (Wednesday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the birth of the 10th Sikh Guru.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">Holi</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Mar 25, 2024 (Monday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Festival of colors.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">Hola Mohalla</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Mar 27, 2024 (Wednesday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Sikh festival.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">Vaisakhi</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Apr 13, 2024 (Saturday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Marks the Sikh New Year and the formation of the Khalsa in 1699 by
            Guru Gobind Singh Ji.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Birthday of Guru Angad Dev
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Apr 18, 2024 (Thursday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the birth of Guru Angad Dev.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Martyrdom of Guru Arjan Dev Sahib
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Jun 16, 2024 (Sunday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Honors the fifth Sikh Guru, who was martyred in 1606 by the Mughal
            emperor for refusing to convert to Islam.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Birth of the Guru Granth
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Oct 20, 2024 (Sunday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the first installation of the Guru Granth Sahib in the
            Golden Temple in 1604.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">Diwali</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Nov 01, 2024 (Friday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Festival of lights.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Guru Nanak Birthday
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Nov 15, 2024 (Friday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the birth of Guru Nanak, the founder of Sikhism, in 1469.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Martyrdom of Guru Tegh Bahadur Sahib
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Nov 24, 2024 (Sunday)
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Commemorates the sacrifice of the ninth Sikh Guru, who was executed
            in Delhi by Aurangzeb for refusing to convert to Islam.
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EventTable;
