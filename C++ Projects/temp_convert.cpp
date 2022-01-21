#include <iostream>
#include <iomanip>
#include <limits>
using namespace std;
int
main ()
{
  cout << "Program written by: Kiernan Soriano" << endl <<
    "Lab 1: Conversion Program" << endl << "CS116 Monday Wednesday" << endl <<
    "Date: Thursday Sept 14th, 2017" << endl << "Time: 11:10 PM" << endl;
  //Declare variables
  int s;			//Starting variable that decides which conversion you use
  int total = 0;		//First variable for time taken by user
  float fahrenheit;		//Float used to get decimal answer
  float celsius;
  string q;			//Takes in the value that ends the program



  while (q != "Quit")		//End loop when user enters Quit
    {

      cout <<
	"Would you like to do the fahrenheit or celsius conversion? (Enter 1 or 2)."
	<< endl;
      cin >> s;			//Takes the option that the user decides to enter
      if (cin.fail ())
	{			//Accounts for non numbers
	  cin.clear ();
	  cin.ignore (numeric_limits < streamsize >::max (), '\n');	//Discards characters up to amount in the word
	  cout << "Would you like to do the time, farenheit, or celsius conversion? (Enter 1 or 2)." << endl;	//Redos function if word entered
	  cin >> s;
	}
      else
	{

	  if (s == 1)		//Begins Fahrenheit to celsius conversion
	    {
	      cout <<
		"Please enter the value you would like to have converted." <<
		endl;
	      cin >> fahrenheit;



	      if (cin.fail ())
		{		//Accounts for non numbers
		  cin.clear ();	//Clears word out of buffer
		  cin.ignore (numeric_limits < streamsize >::max (), '\n');	//Discards characters up to amount in the word
		  cout << "Please enter a number." << endl;
		  cin >> fahrenheit;	//Redo input for following function
		  celsius = (fahrenheit - 32) * 5 / 9;
		  cout << "Your value in celsius is: " << setprecision (3) << celsius << endl;	//Read decimal to tenth place
		}


	      else
		{
		  celsius = (fahrenheit - 32) * 5 / 9;
		  cout << "Your value in celsius is: " << setprecision (3) << celsius << endl;	//Read decimal to tenth place
		}

	    }


	  else if (s == 2)	//Begins Celsius to Fahrenheit conversion
	    {
	      cout <<
		"Please enter the value you would like to have converted." <<
		endl;
	      cin >> celsius;


	      if (cin.fail ())
		{		//Accounts for non numbers
		  cin.clear ();
		  cin.ignore (numeric_limits < streamsize >::max (), '\n');
		  cout << "Please enter a number." << endl;
		  cin >> celsius;
		  fahrenheit = celsius * 9 / 5 + 32;
		  cout << "Your value in celsius is: " << setprecision (3) << fahrenheit << endl;	//Read decimal to tenth place
		}


	      else
		{
		  fahrenheit = celsius * 9 / 5 + 32;
		  cout << "Your value in celsius is: " << setprecision (3) << fahrenheit << endl;	//Read decimal to tenth place
		}

	    }


	  else
	    {
	      cout << "Please enter a number between 1 and 2. Otherwise,";	//Redo input
	    }

	  cout << "If you would like to stop, please enter 'Quit'" << endl;	//Determine continue/quit
	  cin >> q;

	}

    }
}

