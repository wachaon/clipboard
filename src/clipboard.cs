using System;
using System.Text;
using System.Windows.Forms;

internal class clipboard {
    [STAThread]
    public static void Main(params string[] args) {
        string method = args[0];
        string format = args[1];
        if (method == "setData") {
            if (format == "Text") {
                string data = args[2];
                Clipboard.SetDataObject(data, true);
            }
        }
        if (method == "getData") {
            if (format == "Text") {
                IDataObject data = Clipboard.GetDataObject();
                if(data.GetDataPresent(DataFormats.Text)) {
                    Console.WriteLine(data.GetData(DataFormats.Text));
                }
            }
        }
    }
}
