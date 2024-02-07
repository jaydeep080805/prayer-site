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
            Guru Gobind Singh Ji&apos;s Birthday
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">January 5</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the birth of the 10th Sikh Guru.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Maghi - Mela Maghi
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">January 14</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Commemorates the martyrdom of the Forty Immortals who fought
            valiantly for Guru Gobind Singh Ji.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">Vaisakhi</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">April 14</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Marks the Sikh New Year and the formation of the Khalsa in 1699 by
            Guru Gobind Singh Ji.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Martyrdom of Guru Arjan Dev Ji
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">June 16</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Honors the fifth Sikh Guru, who was martyred in 1606 by the Mughal
            emperor for refusing to convert to Islam.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            First Prakash Utsav of Guru Granth Sahib Ji
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">September 1</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the first installation of the Guru Granth Sahib in the
            Golden Temple in 1604.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Guru Nanak Dev Ji&apos;s Birthday
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">November 8</td>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Celebrates the birth of Guru Nanak, the founder of Sikhism, in 1469.
          </td>
        </tr>
        <tr>
          <td className="px-2 py-2 border-b font-main lg:px-8">
            Martyrdom of Guru Tegh Bahadur Ji
          </td>
          <td className="px-2 py-2 border-b font-main lg:px-8">November 24</td>
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
