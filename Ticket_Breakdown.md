# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


Ticket 1: Update Agent Table for Custom IDs
Acceptance Criteria:

Add a new column custom_id to the Agents table in the database.
The custom_id column should allow Facilities to save their own custom IDs for each Agent.
Ensure that the custom_id column is unique and indexed for efficient lookup.
Update the existing data in the Agents table to set the custom_id column to NULL for all existing Agents.
Time/Effort Estimate: 2 hours
Implementation Details:

Add a migration script to update the Agents table schema and add the custom_id column.
Use appropriate database query language (e.g., SQL) to add the column and set its properties.
Write a script to update the existing data in the Agents table, setting the custom_id column to NULL for all existing Agents.

----------------------------------------------------------------------------------------------------------------------------
Ticket 2: Update Shifts Metadata to Include Custom Agent IDs
Acceptance Criteria:

Modify the getShiftsByFacility function to include the custom ID of the Agent assigned to each Shift in the returned metadata.
Ensure that the getShiftsByFacility function retrieves the custom ID from the Agents table based on the Facility's custom ID mapping.
Time/Effort Estimate: 4 hours
Implementation Details:

Identify the code or database queries responsible for retrieving Shifts for a Facility.
Modify the code or query to fetch the custom ID of the Agent from the Agents table based on the Facility's custom ID mapping.
Include the custom ID in the metadata returned by the getShiftsByFacility function.

-----------------------------------------------------------------------------------------------------------------------------
Ticket 3: Update Report Generation with Custom Agent IDs
Acceptance Criteria:

Modify the generateReport function to use the custom ID of the Agent when generating the reports.
Ensure that the custom ID is displayed alongside the Agent's name and other relevant information in the generated PDF reports.
Time/Effort Estimate: 3 hours
Implementation Details:

Identify the code responsible for generating the PDF reports based on the list of Shifts.
Modify the code to use the custom ID of the Agent when generating the reports.
Update the report template or layout to display the custom ID alongside the Agent's name and other relevant information.

-----------------------------------------------------------------------------------------------------------------------------
Ticket 4: Facility UI for Managing Custom Agent IDs
Acceptance Criteria:

Develop a user interface (UI) component in the Facility's application to allow Facilities to manage custom IDs for the Agents they work with.
Facilities should be able to add, edit, and delete custom IDs for Agents.
Ensure that the UI component communicates with the backend API to perform the necessary CRUD operations on the custom IDs.
Time/Effort Estimate: 8 hours
Implementation Details:

Design and develop a user-friendly UI component for Facilities to manage custom IDs.
Implement functionality for adding, editing, and deleting custom IDs through appropriate API calls to the backend.
Handle user input validation and error handling to provide a smooth user experience.

---------------------------------------------------------------------------------------------------------------------------------
Ticket 5: Validate and Handle Custom ID Uniqueness
Acceptance Criteria:

Implement validation and handling of custom ID uniqueness to avoid conflicts between Facilities.
When a Facility tries to save a custom ID that is already assigned to another Agent in their Facility, appropriate error messages should be displayed.
Prevent Facilities from assigning the same custom ID to multiple Agents within their Facility.
Time/Effort Estimate: 4 hours
Implementation Details:

Implement server-side validation to check the uniqueness of custom IDs within a Facility.
Handle database queries or API calls to ensure that custom IDs are unique within a Facility.
Return appropriate error messages or responses to the Facility when a conflict occurs.
Note: The time/effort estimates provided are rough estimates and can vary based on the complexity of the existing code




