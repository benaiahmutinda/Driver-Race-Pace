import pytest
from ...core.races import get_race_data

@pytest.mark.data
def test_get_race_data():
    race = get_race_data()
    assert race == True
    ...

