import PropTypes from "prop-types";

function Table({
  name,
  guruship,
  birth,
  placeOfBirth,
  death,
  contributions,
  successor,
}) {
  return (
    <table className="text-left border-collapse border border-gray-200 mt-5 mx-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-300 border-b dark:bg-gray-800">
            Attribute
          </th>
          <th className="px-4 py-2 bg-gray-300 border-b dark:bg-gray-800">
            Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">Name</td>
          <td className="px-4 py-2 border-b font-main">{name}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">
            Guruship
          </td>
          <td className="px-4 py-2 border-b font-main">{guruship}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">Birth</td>
          <td className="px-4 py-2 border-b font-main">{birth}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">
            Place of Birth
          </td>
          <td className="px-4 py-2 border-b font-main">{placeOfBirth}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">Death</td>
          <td className="px-4 py-2 border-b font-main">{death}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">
            Major Contributions
          </td>
          <td className="px-4 py-2 border-b font-main">{contributions}</td>
        </tr>

        <tr>
          <td className="px-4 py-2 border-b font-heading font-bold">
            Successor
          </td>
          <td className="px-4 py-2 border-b font-main">{successor}</td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  name: PropTypes.string.isRequired,
  guruship: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  contributions: PropTypes.string.isRequired,
  successor: PropTypes.string.isRequired,
};

export default Table;
