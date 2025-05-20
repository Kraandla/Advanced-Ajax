// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function FillCities(lstCountryCtrl,lstCityId)
{
                var lstCities = $("#"+lstCityId);
lstCities.empty();

lstCities.append($('<option />',
{
    value: null,
text: "Select City"
                    }));

var selectedCountry = lstCountryCtrl.options[lstCountryCtrl.selectedIndex].value;

if (selectedCountry != null &&	selectedCountry != '')
{
    $.getJSON('/Customer/getcitybycountry', { countryId: selectedCountry }, function (cities) {
        if (cities != null && !jQuery.isEmptyObject(cities)) {
            $.each(cities, function (index, city) {
                lstCities.append($('<option/>',
                    {
                        value: city.value,
                        text: city.text
                    }));
            });
        };
    });
                    }
return;
    }

$(".custom-file-input").on("change", function () {

            var fileName = $(this).val().split("\\").pop();

document.getElementById('PreviewPhoto').src = window.URL.createObjectURL(this.files[0]);

document.getElementById('PhotoUrl').value = fileName;

});


function ShowCreateModalForm() {
    var myModal = new bootstrap.Modal(document.getElementById('DivCreateDialogholder'));
    myModal.show();
    return;
}

function submitModalForm() {
    var btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.click();
}

function refreshCountryList() {
    var btnBack = document.getElementById('dupBackBtn');
    btnBack.click();
    FillCoutries("lstCountryId");
}

function refreshCityList() {
    var btnBack = document.getElementById('dupBackBtn');
    btnBack.click();
    FillCities("lstCityId");
}
function FillCoutries(lstCountryId) { // Note the typo: FillCoutries
    var lstCountries = $("#" + lstCountryId);
    lstCountries.empty();

    lstCountries.append($('<option />',
        {
            value: null,
            text: "Select Country"
        }));

    $.getJSON("/country/GetCountries", function (countries) {
        if (countries != null && !jQuery.isEmptyObject(countries)) {
            $.each(countries, function (index, country) {
                lstCountries.append($('<option/>',
                    {
                        value: country.value,
                        text: country.text
                    }));
            });
        };
    });
    return;
}